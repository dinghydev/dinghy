import { streamCmd } from "./cmd.ts";
import { reactiacAppHome, reactiacRc } from "./loadConfig.ts";
import { CONTAINER_APP_HOME } from "../commands/devcontainer.ts";
import { configGetDockerImage } from "./dockerConfig.ts";

export const runWorkspaceTask = async (args: string[]) => {
  const envs = [
    ...Object.entries(reactiacRc).map(([key, value]) => `${key}=${value}`),
    `APP_HOME=${CONTAINER_APP_HOME}`,
    `HOST_APP_HOME=${reactiacAppHome}`,
  ];
  await streamCmd([
    "docker",
    "run",
    "--rm",
    "-t",
    ...envs.flatMap((env) => ["-e", env]),
    "--volume",
    `${reactiacAppHome}:${CONTAINER_APP_HOME}`,
    "--volume",
    `${reactiacAppHome}:${reactiacAppHome}`,
    configGetDockerImage(),
    "workspace-task",
    ...args,
  ]);
};
