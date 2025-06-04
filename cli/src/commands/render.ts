import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../types.ts";
import { OPTIONS_SYMBOL, REQUIRE_ENGINE_SYMBOL, RUN_SYMBOL } from "../types.ts";
import { runEngineCommand } from "../utils/runEngineCommand.ts";
const options: CommandOptions = {
  description: {},
  cmdDescription:
    "Render from .tsx files to target formats e.g. .drawio or .tf",
};

const run = async (context: CommandContext, _args: CommandArgs) => {
  await runEngineCommand(context);
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
  [REQUIRE_ENGINE_SYMBOL]: true,
};

export default commands;
