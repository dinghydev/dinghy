import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../types.ts'

const options: CommandOptions = {
  description: {},
  cmdDescription: 'Login to the Docker registry',
}
const run = (_context: CommandContext, _args: CommandArgs) => {
  console.log('TODO: login to the Docker registry')
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
