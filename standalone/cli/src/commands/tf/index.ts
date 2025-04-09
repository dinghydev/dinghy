import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { showHelp } from "../../utils/showHelp.ts";
import init from "./init.ts";
import plan from "./plan.ts";
import apply from "./apply.ts";
import generate from "./generate.ts";

const options: CommandOptions = {
  description: {},
  cmdDescription: "Terraform/OpenTofu related operations",
};
const run = async (context: CommandContext, _args: CommandArgs) => {
  showHelp(context);
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
  init,
  plan,
  apply,
  generate,
};

export default commands;
