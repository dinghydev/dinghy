import type { CommandArgs, CommandContext, Commands } from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { runTf } from "./runTf.ts";
import { createTfOptions, parseTfOptions, tfOptionsPlan } from "./tfOptions.ts";

const options: any = createTfOptions({
  ...tfOptionsPlan,
  cmdDescription: "Apply pending planned changes",
});

const run = async (_context: CommandContext, args: CommandArgs) => {
  const { stages, tfVersion } = parseTfOptions(args);
  for (const stage of stages) {
    const stagePath = `${args.output}/${stage.id}`;
    await runTf(
      stagePath,
      tfVersion,
      args,
      ["terraform", "apply", args["plan-file"]],
    );
  }
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
