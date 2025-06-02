import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { runCommand } from "../../utils/runCommand.ts";
import png from "./png.ts";
import generate from "./generate.ts";
const options: CommandOptions = {
  boolean: ["debug"],
  description: {},
  arguments: {
    stack: {
      description: "Stack name or tsx file name",
      required: false,
    },
  },
  cmdDescription:
    "Diagram related operations, default is convert drawio files to png",
};
const run = async (context: CommandContext, _args: CommandArgs) => {
  const generateArgs = ["generate", ...context.originalArgs.slice(1)];
  await runCommand({
    prefix: ["diagram"],
    envPrefix: ["diagram"],
    args: generateArgs,
    originalArgs: ["diagram", ...generateArgs],
    commands,
    options: png[OPTIONS_SYMBOL],
  });
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
  png,
  generate,
};

export default commands;
