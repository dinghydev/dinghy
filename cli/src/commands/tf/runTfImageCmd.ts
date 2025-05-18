import type { CommandArgs } from "../../types.ts";
import { hostAppHome } from "../../utils/loadConfig.ts";
import { configGetTfImage } from "../../utils/dockerConfig.ts";
import { runDockerCmd } from "../../utils/dockerUtils.ts";

export const DOCKER_IMAGE_TF_VERSION: string[] = [];

export const runTfImageCmd = async (
  workingDir: string,
  tfVersion: string | null,
  options: CommandArgs,
  args: string[],
  exitOnFailure = true,
) => {
  if (tfVersion) {
    if (DOCKER_IMAGE_TF_VERSION.length === 0) {
      DOCKER_IMAGE_TF_VERSION.push(tfVersion);
    }
  } else {
    if (DOCKER_IMAGE_TF_VERSION.length === 0) {
      console.warn("tfVersion wasn't populated yet, use latest version");
      tfVersion = "latest";
    } else {
      tfVersion = DOCKER_IMAGE_TF_VERSION[0];
    }
  }
  const containerWorkingDir = workingDir.startsWith("/")
    ? workingDir
    : `${hostAppHome}/${workingDir}`;

  return await runDockerCmd(
    containerWorkingDir,
    [{
      source: containerWorkingDir,
      target: containerWorkingDir,
    }],
    [...args, ...(options["tf-options"] || [])],
    configGetTfImage(tfVersion),
    exitOnFailure,
  );
};
