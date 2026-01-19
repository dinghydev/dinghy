import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import connect from './connect.ts'
import { showHelp } from '@dinghy/cli'
import bash from './bash.ts'
import list from './list.ts'
const options: CommandOptions = {
  description: {},
  cmdDescription: 'AWS related operations',
}
const run = (context: CommandContext, _args: CommandArgs) => {
  showHelp(context)
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
  connect,
  list,
  bash,
}

export default commands
