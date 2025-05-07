import type { CommandArgs, CommandContext, Commands } from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { notifyChanges } from "../../utils/notificationUtils.ts";
import { runTfImageCmd } from "./runTfImageCmd.ts";
import { createTfOptions, parseTfOptions, tfOptionsPlan } from "./tfOptions.ts";

const options: any = createTfOptions({
  ...tfOptionsPlan,
  cmdDescription: "Apply pending planned changes",
});

const run = async (_context: CommandContext, args: CommandArgs) => {
  const { stack, stackInfo, tfVersion } = parseTfOptions(args);
  const changedStages: any[] = [];
  const changedStacks: any[] = [];
  for (const stage of Object.values(stackInfo.stages)) {
    if ((stage as any).plan?.changesCount) {
      changedStages.push(stage);
      if (!changedStacks.includes(stack)) {
        changedStacks.push(stack);
      }
    }
  }
  if (changedStages.length) {
    try {
      for (const stage of changedStages) {
        const stagePath = `${args.output}/${stage.id}`;
        await runTfImageCmd(
          stagePath,
          tfVersion,
          args,
          ["terraform", "apply", args["plan-file"]],
        );
      }
      await notifyChanges(changedStages);
    } catch (error) {
      await notifyChanges(changedStages, error as string);
    }
  } else {
    console.log("No changes found");
  }
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
