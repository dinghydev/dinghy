import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../../../cli/src/types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../../../cli/src/types.ts";
import { showHelp } from "../../utils/showHelp.ts";
import login from "./login.ts";
import build from "./build.ts";

const options: CommandOptions = {
  description: {},
  cmdDescription: "Docker related operations",
};

const run = (context: CommandContext, _args: CommandArgs) => {
  showHelp(context);
};

const commands: Commands = {
  login,
  build,
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
