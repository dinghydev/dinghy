import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import Debug from "debug";
import { runWorkspaceTask } from "../../utils/runWorkspaceTask.ts";
import tf from "./index.ts";
import { runCommand } from "../../utils/runCommand.ts";
import { hostAppHome, reactiacAppConfig } from "../../utils/loadConfig.ts";
import { doWithStacks } from "../../utils/index.ts";
import {
  attachChangeToMR,
  isCi,
  isMr,
  triggerAutoDeployJobs,
} from "../../utils/gitUtils.ts";
import { notifyChanges } from "../../utils/notificationUtils.ts";
import chalk from "chalk";
import { parseTfOptions } from "./tfOptions.ts";
const debug = Debug("tf:diff");

const options: CommandOptions = {
  boolean: ["debug"],
  collect: ["stage"],
  description: {
    stage: "Stages to work with",
  },
  arguments: {
    stack: {
      description: "Stack name",
      required: false,
    },
  },
};

const runStackTfCommands = async (
  stack: string,
  tfCommand: string,
  args: string[],
) => {
  await runCommand({
    prefix: ["tf"],
    envPrefix: ["tf"],
    args: [tfCommand, stack, ...args],
    originalArgs: ["tf", tfCommand, stack, ...args],
    commands: tf,
    options: tf[OPTIONS_SYMBOL],
  });
};

const runStackCommands = async (stack: string, args: string[]) => {
  await runStackTfCommands(stack, "init", args);
  await runStackTfCommands(stack, "plan", args);
};

const run = async (context: CommandContext, args: CommandArgs) => {
  const remainArgs = context.originalArgs.slice(2);
  const noneStackArgs = args.stack ? remainArgs.slice(1) : remainArgs;
  const activedStackIds: string[] = [];

  const stacksOptions: any = {};
  await doWithStacks(
    reactiacAppConfig,
    args.stack,
    async (stackOptions: any) => {
      await runWorkspaceTask([
        "render",
        stackOptions.stack.id,
        "--format",
        "tf",
        ...noneStackArgs,
      ]);
      stacksOptions[stackOptions.stack.id] = stackOptions;
    },
  );

  for (const stackOptions of Object.values(stacksOptions)) {
    const tfOptions = parseTfOptions(args, stackOptions);
    if (tfOptions) {
      const { stack } = tfOptions;
      if (
        args.stack ||
        !isCi() ||
        (isMr() && stack.mrAutoDiff) ||
        (!isMr() && stack.mainAutoDiff)
      ) {
        activedStackIds.push(stack.id);
        await runStackCommands(stack.id, noneStackArgs);
      }
    }
  }

  const changedStacks: any[] = [];
  const changedStages: any[] = [];
  for (const stackId of activedStackIds) {
    const stackInfoFile =
      `${hostAppHome}/${args.output}/${stackId}-stack-info.json`;
    const stackInfo = JSON.parse(Deno.readTextFileSync(stackInfoFile));
    for (const stage of Object.values(stackInfo.stages)) {
      if ((stage as any).plan?.changesCount) {
        changedStages.push(stage);
        const stack = stacksOptions[stackId];
        if (!changedStacks.includes(stack)) {
          changedStacks.push(stack);
        }
      }
    }
  }
  if (changedStacks.length) {
    if (isCi()) {
      const changeAction = isMr() ? attachChangeToMR : notifyChanges;
      await changeAction(changedStages);
      await triggerAutoDeployJobs(changedStacks, args);
    } else {
      console.log("Ignore notification and auto deploy in non-CI environment");
    }
  } else if (Object.values(stacksOptions).length > 1) {
    console.log(chalk.green("No changes found in any stack"));
  }
};

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command;
