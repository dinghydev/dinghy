import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { showHelp } from "../../utils/showHelp.ts";
import png from "./png.ts";
const options: CommandOptions = {
  description: {},
  cmdDescription: "Diagram related operations",
};
const run = async (context: CommandContext, _args: CommandArgs) => {
  showHelp(context);
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
  png: png,
};

export default commands;
