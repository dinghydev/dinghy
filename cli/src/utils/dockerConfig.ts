import Debug from "debug";
import { resolveLatestVersion } from "./updateCheck.ts";
import { configGet } from "./loadConfig.ts";
import {
  projectVersionDrawio,
  projectVersionRelease,
} from "./projectVersions.ts";
const debug = Debug("dockerConfig");

export const configDockerRepoDefault =
  "public.ecr.aws/f2v6q7q7/reactiac/reactiac";
export const configDockerVersionDefault = "latest";

export const configGetDockerRepo = () => {
  return configGet(["docker", "repo"]) || configDockerRepoDefault;
};

export const configGetDockerImageVersion = () => {
  let version = configGet(["docker", "imageVersion"]) ||
    configDockerVersionDefault;
  if (!version.includes("-")) { // for latest and base version
    if (Deno.execPath().endsWith("deno")) {
      version = projectVersionRelease();
      debug("resolved docker image version %s for direct run", version);
    } else {
      version = resolveLatestVersion(version);
      debug("resolved docker image version %s for standalone cli", version);
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

export const configGetTfImage = (version: string) => {
  const arch = Deno.build.arch === "aarch64" ? "-linux-arm64" : "";
  const image = `${configGetDockerRepo()}:${version}${arch}`;
  debug("resolved tf image %s", image);
  return image;
};

export const configGetDrawioImage = () => {
  const arch = Deno.build.arch === "aarch64" ? "-linux-arm64" : "";
  const image = `${configGetDockerRepo()}:${projectVersionDrawio()}${arch}`;
  debug("resolved drawio image %s", image);
  return image;
};
