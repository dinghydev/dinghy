import chalk from "chalk";
import type { CommandArgs, CommandContext, Commands } from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { isCi } from "../../utils/gitUtils.ts";
import { notifyChanges } from "../../utils/notificationUtils.ts";
import { runTfImageCmd } from "./runTfImageCmd.ts";
import { createTfOptions, parseTfOptions, tfOptionsPlan } from "./tfOptions.ts";
import { doWithTfStacks } from "./doWithTfStacks.ts";

const options: any = createTfOptions({
  ...tfOptionsPlan,
  cmdDescription: "Apply pending planned changes",
});

const run = async (_context: CommandContext, args: CommandArgs) => {
  const changedStages: any[] = [];
  let tfVersion!: string;
  await doWithTfStacks(args, async (tfOptions) => {
    const { stackInfo } = tfOptions;
    tfVersion = tfOptions.tfVersion;
    for (const stage of Object.values(stackInfo.stages)) {
      if ((stage as any).plan?.changesCount) {
        changedStages.push(stage);
      }
    }
  });
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
      if (isCi()) {
        await notifyChanges(changedStages);
      } else {
        console.log("Ignore notification in non-CI environment");
        changedStages.map((change) => {
          console.log(
            chalk.red(`${change.id} changes: ${change.plan.summary}`),
          );
        });
        console.log(
          chalk.green(`Changes applied in ${changedStages.length} stages`),
        );
      }
    } catch (error) {
      await notifyChanges(changedStages, error as string);
    }
  } else {
    console.log(chalk.green("No changes found"));
  }
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
