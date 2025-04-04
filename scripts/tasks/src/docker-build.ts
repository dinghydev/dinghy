import * as cli from "@std/cli";
import { walk } from "@std/fs";
import { baseVersion, commitVersion } from "./utils/commitVersion.ts";
import { projectRoot } from "./utils/projectRoot.ts";
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
    await dockerCommand(["push", "--platform", options.platform, tag]);
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

async function buildHashedImage(
  options: any,
  name: string,
  baseImage: string,
  selectedVersion: string,
) {
  const platformTag = options.arch === "amd64" ? "" : `-linux-${options.arch}`;
  const lastTag = `${options.repo}:${name}${platformTag}`;
  const baseVersionTag =
    `${options.repo}:${name}-${selectedVersion}${platformTag}`;
  const firstTag = `${options.repo}:${name}-${await hashDockerfiles(
    name,
    baseImage,
  )}${platformTag}`;
  try {
    await dockerCommand(["pull", "--platform", options.platform, firstTag]);
  } catch (e) {
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
        `BUILDPLATFORM=${options.arch}`,
        "--build-arg",
        `BASE_IMAGE=${baseImage}`,
        "--platform",
        options.platform,
        "-f",
        `docker/${name}/Dockerfile`,
        "-t",
        firstTag,
        ".",
      ],
    );
  }
  return firstTag;
}

async function buildReleaseImage(options: any, baseImage: string) {
  const platformTag = options.arch === "amd64" ? "" : `-linux-${options.arch}`;
  const lastTag = `${options.repo}:latest${platformTag}`;
  const baseVersionTag = `${options.repo}:${packageBaseVersion}${platformTag}`;
  const firstTag = `${options.repo}:${version}${platformTag}`;
  console.log(`Building ${firstTag} ...`, new Date().toISOString());
  try {
    await dockerCommand(["pull", "--platform", options.platform, firstTag]);
  } catch (e) {
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
        `BUILDPLATFORM=${options.arch}`,
        "--build-arg",
        `BASE_IMAGE=${baseImage}`,
        "--platform",
        options.platform,
        "-f",
        "docker/release/Dockerfile",
        "-t",
        firstTag,
        ".",
      ],
    );
  }
  return firstTag;
}

async function dockerBuild(options: any) {
  console.log("Starting docker build ...", new Date().toISOString());
  const baseImage = await buildHashedImage(
    options,
    "deno-base",
    options.baseImage,
    packageBaseVersion,
  );
  const dependenciesImage = await buildHashedImage(
    options,
    "deno-dependencies",
    baseImage,
    packageBaseVersion,
  );

  await buildReleaseImage(options, dependenciesImage);
  // return `Completed docker publish ${new Date().toISOString()}`
}

// const resolveVersion = () => commitVersion(projectRoot)

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
  await dockerBuild(args as any);
}
