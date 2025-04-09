import Debug from "debug";
import { resolveLatestVersion } from "./updateCheck.ts";
import { configGet } from "./loadConfig.ts";
const debug = Debug("dockerConfig");

export const configDockerRepoDefault =
  "public.ecr.aws/f2v6q7q7/reactiac/reactiac";
export const configDockerVersionDefault = "latest";

export const configGetDockerRepo = () => {
  return configGet(["docker", "repo"]) || configDockerRepoDefault;
};

export const configGetDockerVersion = () => {
  const version = configGet(["docker", "version"]) ||
    configDockerVersionDefault;
  if (
    !version.includes("-") && // for latest and base version
    !Deno.execPath().endsWith("deno") // for uncompiled version during development
  ) {
    return resolveLatestVersion(version);
  }
  return version;
};

export const configGetDockerImage = () => {
  let image = configGet(["docker", "image"]);
  if (!image) {
    const arch = Deno.build.arch === "aarch64" ? "-linux-arm64" : "";
    image = `${configGetDockerRepo()}:${configGetDockerVersion()}${arch}`;
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
