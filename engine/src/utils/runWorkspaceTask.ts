import { configGetDockerImage } from "./dockerConfig.ts";
import { runDockerCmd } from "./dockerUtils.ts";
import { hostAppHome } from "./loadConfig.ts";

export const runWorkspaceTask = async (args: string[]) => {
  return await runDockerCmd(
    hostAppHome,
    [],
    ["workspace-task", ...args],
    configGetDockerImage(),
  );
};
