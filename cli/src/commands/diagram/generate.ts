import { existsSync } from "@std/fs/exists";
import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { containerAppHome } from "../../utils/loadConfig.ts";
import { streamCmd } from "../../utils/cmd.ts";
import Debug from "debug";
import { resolve } from "@std/path/resolve";
import { runDockerCmd } from "../../utils/dockerUtils.ts";
import { configGetDrawioImage } from "../../utils/dockerConfig.ts";
import chalk from "chalk";
import { runWorkspaceTask } from "../../utils/runWorkspaceTask.ts";
import { runCommand } from "../../utils/runCommand.ts";
import png from "./png.ts";
const debug = Debug("diagram:generate");

const options: CommandOptions = {
  description: {},
  cmdDescription: "Render drawio files and generate png outputs",
};

const run = async (context: CommandContext, args: CommandArgs) => {
  await runWorkspaceTask([
    "render",
    "--format",
    "diagram",
    ...context.originalArgs.slice(1),
  ]);

  await runCommand({
    prefix: ["diagram"],
    envPrefix: ["diagram"],
    args: ["png", ...context.originalArgs.slice(1)],
    originalArgs: context.originalArgs,
    commands: { png } as any,
    options: png[OPTIONS_SYMBOL],
  });
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
