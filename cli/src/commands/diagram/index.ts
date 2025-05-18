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
  description: {},
  cmdDescription:
    "Diagram related operations, default is convert drawio files to png",
};
const run = async (context: CommandContext, _args: CommandArgs) => {
  await runCommand({
    prefix: ["diagram"],
    envPrefix: ["diagram"],
    args: ["generate", ...context.originalArgs.slice(1)],
    originalArgs: context.originalArgs,
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
