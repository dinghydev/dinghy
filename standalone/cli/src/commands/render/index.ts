import type { CommandArgs, CommandContext, Commands } from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { renderOptions } from "../../utils/renderOptions.ts";
import { runWorkspaceTask } from "../../utils/runWorkspaceTask.ts";

const run = async (_context: CommandContext, _args: CommandArgs) => {
  await runWorkspaceTask(Deno.args);
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: renderOptions,
  [RUN_SYMBOL]: run,
};

export default commands;
