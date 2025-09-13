import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '@dinghy/cli'
import { DinghyError, OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { streamCmd } from '../utils/cmd.ts'
import { subCommandArgs } from '../utils/subCommandArgs.ts'

const options: CommandOptions = {
  description: {},
  cmdDescription: 'Run deno command with engine image',
}

const run = async (context: CommandContext, _args: CommandArgs) => {
  const result = await streamCmd(
    [
      'deno',
      ...subCommandArgs(context.originalArgs),
    ],
    undefined,
    false,
  )
  if (result.exitCode !== 0) {
    throw new DinghyError(`Failed to run deno, see error above`)
  }
}
export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
