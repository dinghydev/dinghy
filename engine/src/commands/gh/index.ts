import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL, showHelp } from '@dinghy/cli'
import prepare from './prepare.ts'

const options: CommandOptions = {
  description: {},
  cmdDescription: 'GitHub related operations',
}

const run = (context: CommandContext, _args: CommandArgs) => {
  showHelp(context)
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
  prepare,
}

export default commands
