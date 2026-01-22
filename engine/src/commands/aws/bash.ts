import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { runAwscliImageCmd } from './runAwscliImageCmd.ts'
import { awscliOptions } from './awscliOptions.ts'
import { subCommandArgs } from '../../utils/subCommandArgs.ts'

const options: any = {
  ...awscliOptions,
  cmdDescription: 'Run bash command with awscli image',
}

const run = async (context: CommandContext, args: CommandArgs) => {
  await runAwscliImageCmd(
    args,
    ['bash', ...subCommandArgs(context.originalArgs, 2)],
  )
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
