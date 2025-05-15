import * as cli from "@std/cli";
import { walk } from "@std/fs";
import {
  baseVersion,
  commitVersion,
} from "../../cli/src/utils/commitVersion.ts";
import { projectRoot } from "../../cli/src/utils/projectRoot.ts";
import { execaSync } from "execa";

const version = await commitVersion(projectRoot);
const packageBaseVersion = baseVersion(projectRoot);

const fileMd5sum = (file: string) =>
  execaSync`md5sum ${file}`.stdout.split(" ")[0];
const textMd5sum = (text: string) =>
  execaSync({ shell: true })`echo ${text} | md5sum -t`.stdout.split(" ")[0];

async function allFiles(dir: string) {
  const files: string[] = [];
  for await (const dirEntry of walk(dir)) {
    if (dirEntry.isFile) {
      files.push(dirEntry.path);
    }
  }
  return files.sort((a, b) => a.localeCompare(b));
}

async function hashDockerfiles(name: string, baseImage: string) {
  const hashs = [baseImage];
  for (const file of await allFiles(`${projectRoot}/docker/${name}`)) {
    hashs.push(fileMd5sum(file));
  }

  return textMd5sum(hashs.join("-"));
}

async function dockerPush(options: any, tag: string) {
  if (options.push) {
    if (tag.endsWith("-dirty")) {
      throw new Error(`Cannot push dirty image: ${tag}`);
    }
    await dockerCommand([
      "push",
      tag,
    ]);
  } else {
    console.log(`Skipping: docker push ${tag}`);
  }
}

async function publishImage(options: any, tags: string[], buildArgs: string[]) {
  const firstTag = tags[0];
  const lastTag = tags[tags.length - 1];
  const otherTags = tags.slice(1, tags.length - 1);

  await dockerCommand(buildArgs);

  for (const tag of otherTags) {
    await dockerCommand(["tag", firstTag, tag]);
    await dockerPush(options, tag);
  }

  await dockerCommand([
    "tag",
    firstTag,
    lastTag,
  ]);
  await dockerPush(options, lastTag);

  await dockerPush(options, firstTag);
}

async function dockerCommand(args: string[]) {
  console.log(`Executing: docker ${args.join(" ")}`);
  execaSync({
    stderr: "inherit",
    stdout: "inherit",
    cwd: projectRoot,
  })`docker ${args}`;
}

function isTagExists(tag: string) {
  if (tag.endsWith("-dirty")) {
    return false;
  }
  const args = ["manifest", "inspect", tag];
  try {
    execaSync({
      stdio: "ignore",
      cwd: projectRoot,
    })`docker ${args}`;
  } catch (e) {
    return false;
  }
  return true;
}

async function buildImage(
  options: any,
  name: string,
  baseImage: string,
  selectedVersion: string,
  args: string[] = [],
) {
  const platformTag = options.arch === "amd64" ? "" : `-linux-${options.arch}`;
  const lastTag = `${options.repo}:${
    name === "release" ? "latest" : name
  }${platformTag}`;
  const baseVersionTag = `${options.repo}:${
    name === "release" ? packageBaseVersion : `${name}-${selectedVersion}`
  }${platformTag}`;

  const firstTag = `${options.repo}:${
    name === "release" ? version : `${name}-${await hashDockerfiles(
      name,
      [baseImage, ...args].join("-"),
    )}`
  }${platformTag}`;
  if (isTagExists(firstTag)) {
    console.log(`Tag ${firstTag} already exists, skipping build`);
    return firstTag;
  }
  console.log(
    `Tag ${firstTag} does not exist, building...`,
    new Date().toISOString(),
  );
  await publishImage(
    options,
    [firstTag, baseVersionTag, lastTag],
    [
      "buildx",
      "build",
      "--build-arg",
      `TARGETPLATFORM=${options.platform}`,
      "--build-arg",
      `BASE_IMAGE=${baseImage}`,
      ...args,
      "--platform",
      options.platform,
      "-f",
      `docker/${name}/Dockerfile`,
      "-t",
      firstTag,
      ".",
    ],
  );
  return firstTag;
}

async function dockerBuild(options: any) {
  console.log("Starting docker build ...", new Date().toISOString());
  const baseImage = await buildImage(
    options,
    "base",
    options.baseImage,
    packageBaseVersion,
  );
  // const baseImage =
  //   "public.ecr.aws/f2v6q7q7/reactiac/reactiac:base-af9c52c6ef783030cd17942c6d0c40ea-linux-arm64";
  const releaseBaseImage = await buildImage(
    options,
    "release-base",
    baseImage,
    packageBaseVersion,
  );
  // const releaseBaseImage =
  //   "public.ecr.aws/f2v6q7q7/reactiac/reactiac:release-base-6e726a5e8a1b6f8270fa7ea4fb806f93-linux-arm64";

  const tfVersion = JSON.parse(
    await Deno.readTextFile(
      `${projectRoot}/docker/tf/version.json`,
    ),
  );
  const tfImage = await buildImage(
    options,
    "tf",
    baseImage,
    packageBaseVersion,
    [
      "--build-arg",
      `TERRAFORM_VERSION=${tfVersion.terraform}`,
      "--build-arg",
      `TERRAFORM_AWS_PROVIDER_VERSION=${tfVersion.awsProvider}`,
    ],
  );
  // const tfImage =
  //   "public.ecr.aws/f2v6q7q7/reactiac/reactiac:tf-d910edfbc099f9d0c55c81314d92aeb8-linux-arm64";
  let tfImageVersion = tfImage.split(":")[1];
  if (options.arch !== "amd64") {
    const stringToRemove = `-linux-${options.arch}`;
    tfImageVersion = tfImageVersion.replace(stringToRemove, "");
  }
  const dependenciesImage = await buildImage(
    options,
    "dependencies",
    releaseBaseImage,
    packageBaseVersion,
    [
      "--build-arg",
      `TF_IMAGE_VERSION=${tfImageVersion}`,
    ],
  );
  // const dependenciesImage =
  //   "public.ecr.aws/f2v6q7q7/reactiac/reactiac:dependencies-1f7b694cb4011d2419f4efeb6bcfbd99-linux-arm64";

  await buildImage(
    options,
    "release",
    dependenciesImage,
    version,
  );
}

const defaultArgs = {
  arch: "arm64",
  push: false,
  help: false,
  repo: "public.ecr.aws/f2v6q7q7/reactiac/reactiac",
  baseImage: "denoland/deno:debian-2.2.6",
};

const args = cli.parseArgs(Deno.args, {
  string: ["arch", "push", "repo", "baseImage"],
  boolean: ["push", "help"],
  default: defaultArgs,
  alias: {
    help: "h",
  },
});

args.platform = `linux/${args.arch}`;

if (args.help) {
  console.log("Usage");
  console.log(
    "    $ deno task docker-build [--arch ARCH] [--push] [--repo REPO]",
  );
  console.log("");
  console.log("FLAGS");
  console.log(`    --arch ARCH (${defaultArgs.arch})`);
  console.log(`    --push (${defaultArgs.push}|${!defaultArgs.push})`);
  console.log(`    --repo (${defaultArgs.repo})`);
  console.log(`    --baseImage (${defaultArgs.baseImage})`);
} else {
  if (Deno.env.get("CI")) {
    args.push = true;
  }
  await dockerBuild(args as any);
}
