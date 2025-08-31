import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '@diac/cli'
import { OPTIONS_SYMBOL, DiacError, RUN_SYMBOL } from '@diac/cli'
import { streamCmd } from '../utils/cmd.ts'
import { subCommandArgs } from '../utils/subCommandArgs.ts'

const options: CommandOptions = {
  description: {},
  cmdDescription: 'Run bash command with engine image',
}

const run = async (context: CommandContext, _args: CommandArgs) => {
  const result = await streamCmd(
    [
      'bash',
      ...subCommandArgs(context.originalArgs),
    ],
    undefined,
    false,
  )
  if (result.exitCode !== 0) {
    throw new DiacError(`Failed to run bash, see error above`)
  }
}
export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
