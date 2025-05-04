import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import Debug from "debug";
import { runWorkspaceTask } from "../../utils/runWorkspaceTask.ts";
import tf from "../tf/index.ts";
import { runCommand } from "../../utils/runCommand.ts";
import { reactiacAppConfig } from "../../utils/loadConfig.ts";
import { parseStacks } from "../../utils/stackUtils.ts";
import { isMr } from "../../utils/gitUtils.ts";
const debug = Debug("tf:diff");

const options: CommandOptions = {
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
    commands: tf,
    options: tf[OPTIONS_SYMBOL],
  });
};

const runStackCommands = async (stack: string, args: string[]) => {
  await runWorkspaceTask(["render", stack, ...args]);
  await runStackTfCommands(stack, "init", args);
  await runStackTfCommands(stack, "plan", args);
};

const run = async (_context: CommandContext, args: CommandArgs) => {
  const remainArgs = Deno.args.slice(2);
  const stackIds: string[] = [];
  if (args.stack) {
    stackIds.push(args.stack);
    await runStackCommands(args.stack, remainArgs.slice(1));
  } else {
    const { stacks } = await parseStacks("app", reactiacAppConfig.stacks);
    for (const stack of Object.values(stacks)) {
      if ((isMr() && stack.mrAutoDiff) || (!isMr() && stack.mainAutoDiff)) {
        stackIds.push(stack.id);
        await runStackCommands(stack.id, remainArgs);
      }
    }
  }
  console.log(`TODO: handle result`, stackIds);
};

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command;
