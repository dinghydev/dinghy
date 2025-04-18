import { configGetDockerImage } from "./dockerConfig.ts";
import { runDockerCmd } from "./dockerUtils.ts";
import { appHomeMount } from "./loadConfig.ts";

export const runWorkspaceTask = async (args: string[]) => {
  return await runDockerCmd(
    appHomeMount,
    [],
    ["workspace-task", ...args],
    configGetDockerImage(),
  );
};
