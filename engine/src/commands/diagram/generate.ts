import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import Debug from "debug";
import { runWorkspaceTask } from "../../utils/runWorkspaceTask.ts";
import { runCommand } from "../../utils/runCommand.ts";
import png from "./png.ts";
const debug = Debug("diagram:generate");

const options: CommandOptions = {
  boolean: ["debug"],
  description: {},
  arguments: {
    stack: {
      description: "Stack name or tsx file name",
      required: false,
    },
  },
  cmdDescription: "Render drawio files and generate png outputs",
};

const run = async (context: CommandContext, args: CommandArgs) => {
  debug("running render command from workspace");
  await runWorkspaceTask([
    "render",
    "--format",
    "diagram",
    ...context.originalArgs.slice(2),
  ]);

  const pngArgs = ["png", ...context.originalArgs.slice(2)];

  debug("running png command from workspace");
  await runCommand({
    prefix: ["diagram"],
    envPrefix: ["diagram"],
    args: pngArgs,
    originalArgs: ["diagram", ...pngArgs],
    commands: { png } as any,
    options: png[OPTIONS_SYMBOL],
  });
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
