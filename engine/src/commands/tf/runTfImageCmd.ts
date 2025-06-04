import type { CommandArgs } from "../../../../cli/src/types.ts";
import { runDockerCmd } from "../../../../cli/src/utils/dockerUtils.ts";
import { configGetTfImage } from "../../../../cli/src/utils/dockerConfig.ts";
import { hostAppHome } from "../../../../cli/src/utils/loadConfig.ts";

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
    {},
    [{
      source: containerWorkingDir,
      target: containerWorkingDir,
    }],
    [...args, ...(options["tf-options"] || [])],
    configGetTfImage(),
    exitOnFailure,
  );
};
