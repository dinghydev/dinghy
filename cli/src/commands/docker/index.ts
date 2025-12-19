import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '../../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../types.ts'
import { showHelp } from '../../utils/showHelp.ts'
import build from './build.ts'
import cache from './cache.ts'
import republish from './republish.ts'

const options: CommandOptions = {
  description: {},
  cmdDescription: 'Docker related operations',
}

const run = (context: CommandContext, _args: CommandArgs) => {
  showHelp(context)
}

const commands: Commands = {
  build,
  cache,
  republish,
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
