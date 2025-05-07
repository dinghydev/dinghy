import type { CommandArgs } from "../../types.ts";
import { hostAppHome } from "../../utils/loadConfig.ts";
import { configGetTfImage } from "../../utils/dockerConfig.ts";
import { runDockerCmd } from "../../utils/dockerUtils.ts";

export const TF_IMAGE_VERSION: string[] = [];

export const runTfImageCmd = async (
  workingDir: string,
  tfVersion: string | null,
  options: CommandArgs,
  args: string[],
  exitOnFailure = true,
) => {
  if (tfVersion) {
    if (TF_IMAGE_VERSION.length === 0) {
      TF_IMAGE_VERSION.push(tfVersion);
    }
  } else {
    if (TF_IMAGE_VERSION.length === 0) {
      console.warn("tfVersion wasn't populated yet, use latest version");
      tfVersion = "latest";
    } else {
      tfVersion = TF_IMAGE_VERSION[0];
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
