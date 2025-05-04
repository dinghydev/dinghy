import type { CommandArgs, CommandContext, Commands } from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { runTf } from "./runTf.ts";
import {
  createTfOptions,
  parseTfOptions,
  tfOptionsPlanFile,
} from "./tfOptions.ts";

const options: any = createTfOptions({
  ...tfOptionsPlanFile,
  cmdDescription: "Plan changes",
});

const run = async (_context: CommandContext, args: CommandArgs) => {
  const { stagePath, tfVersion } = parseTfOptions(args);
  await runTf(
    stagePath,
    tfVersion,
    args,
    ["terraform", "plan", `-lock=${args.lock}`, `-out=${args["plan-file"]}`],
  );
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
