import Debug from "debug";
import { resolveLatestVersion } from "./updateCheck.ts";
import { configGet } from "./loadConfig.ts";
import {
  projectVersionDrawio,
  projectVersionRelease,
  projectVersionReleaseBase,
  projectVersionTf,
} from "./projectVersions.ts";
const debug = Debug("dockerConfig");

export const configDockerRepoDefault =
  "public.ecr.aws/f2v6q7q7/reactiac/reactiac";

export const configGetDockerRepo = () => {
  return configGet(["docker", "repo"]) || configDockerRepoDefault;
};

const cliArgsVersion = () => {
  const args = Deno.args;
  const versionIndex = args.findIndex((arg) => arg === "--version");
  if (versionIndex !== -1 && versionIndex + 1 < args.length) {
    const version = args[versionIndex + 1];
    debug("using version %s from cli args", version);
    return version;
  }
  return null;
};

export const configGetDockerImageVersion = () => {
  let version = cliArgsVersion() || configGet(["docker", "imageVersion"]);
  if (!version || !version.includes("-")) {
    debug("none locked version detected, resolving", version);
    if (version && Deno.build.standalone) {
      version = resolveLatestVersion(version);
      debug("resolved docker image version %s for standalone cli", version);
    } else {
      version = projectVersionRelease();
      debug("resolved docker image version %s from .versions.json", version);
    }
  }
  debug("resolved docker image version as %s", version);
  return version;
};

export const configGetDockerImage = () => {
  let image = configGet(["docker", "image"]);
  if (!image) {
    const arch = Deno.build.arch === "aarch64" ? "-linux-arm64" : "";
    image = `${configGetDockerRepo()}:${configGetDockerImageVersion()}${arch}`;
  }
  debug("resolved docker image %s", image);
  return image;
};

export const configGetTfImage = () => {
  const arch = Deno.build.arch === "aarch64" ? "-linux-arm64" : "";
  const image = `${configGetDockerRepo()}:${projectVersionTf()}${arch}`;
  debug("resolved tf image %s", image);
  return image;
};

export const configGetDrawioImage = () => {
  const arch = Deno.build.arch === "aarch64" ? "-linux-arm64" : "";
  const image = `${configGetDockerRepo()}:${projectVersionDrawio()}${arch}`;
  debug("resolved drawio image %s", image);
  return image;
};
