import type { CommandArgs, CommandContext, Commands } from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { streamCmd } from "../../utils/cmd.ts";
import { reactiacAppHome, reactiacRc } from "../../utils/loadConfig.ts";
import { CONTAINER_APP_HOME } from "../devcontainer.ts";
import { renderOptions } from "../../../../../workspace/utils/renderOptions.ts";
import { configGetDockerImage } from "../../utils/dockerConfig.ts";

const run = async (_context: CommandContext, _args: CommandArgs) => {
  const envs = [
    ...Object.entries(reactiacRc).map(([key, value]) => `${key}=${value}`),
    `APP_HOME=${CONTAINER_APP_HOME}`,
  ];
  await streamCmd([
    "docker",
    "run",
    "--rm",
    "-t",
    ...envs.flatMap((env) => ["-e", env]),
    "--volume",
    `${reactiacAppHome}:${CONTAINER_APP_HOME}`,
    configGetDockerImage(),
    "workspace-task",
    ...Deno.args,
  ]);
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: renderOptions,
  [RUN_SYMBOL]: run,
};

export default commands;
