import type { CommandArgs, CommandContext, Commands } from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { runWorkspaceTask } from "../../utils/runWorkspaceTask.ts";
import { tfGenerateOptions } from "../../utils/tfGenerateOptions.ts";

const run = async (context: CommandContext, _args: CommandArgs) => {
  await runWorkspaceTask(["tf-generate", ...context.originalArgs]);
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: tfGenerateOptions,
  [RUN_SYMBOL]: run,
};

export default commands;
