import type { CommandArgs, CommandContext, Commands } from '../types.ts'
import { OPTIONS_SYMBOL, REQUIRE_ENGINE_SYMBOL, RUN_SYMBOL } from '../types.ts'
import { runEngineCommand } from '../utils/runEngineCommand.ts'
const run = async (context: CommandContext, _args: CommandArgs) => {
  await runEngineCommand(context)
}

export const createEngineCommand = (cmdDescription: string): Commands => {
  return {
    [OPTIONS_SYMBOL]: {
      description: {},
      cmdDescription,
    },
    [RUN_SYMBOL]: run,
    [REQUIRE_ENGINE_SYMBOL]: true,
  }
}
