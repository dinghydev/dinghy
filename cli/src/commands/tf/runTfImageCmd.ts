import type { CommandArgs } from "../../types.ts";
import { hostAppHome } from "../../utils/loadConfig.ts";
import { configGetTfImage } from "../../utils/dockerConfig.ts";
import { runDockerCmd } from "../../utils/dockerUtils.ts";

export const runTfImageCmd = async (
  workingDir: string,
  options: CommandArgs,
  args: string[],
  exitOnFailure = true,
) => {
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
    configGetTfImage(),
    exitOnFailure,
  );
};
