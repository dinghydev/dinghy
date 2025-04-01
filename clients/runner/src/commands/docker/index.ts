import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '../../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../types.ts'
import { showHelp } from '../../../../cli/src/utils/showHelp.ts'
import { versionDetails } from '../../../../cli/src/utils/runtimeVersion.ts'
import login from './login.ts'

const options: CommandOptions = {
  description: {
  },
  cmdDescription:
    'Docker related operations',
}

const run = (context: CommandContext, _args: CommandArgs) => {
  showHelp(context)
}

const commands: Commands = {
  login,
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
