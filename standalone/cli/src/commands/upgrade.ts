import type {
  CommandOptions,
  CommandArgs,
  Command,
  CommandContext,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import { execa } from 'execa'

const options: CommandOptions = {
  string: ['version'],
  description: {
    version: 'The version to upgrade to',
  },
  alias: {
    v: 'version',
  },
  default: {
    version: 'latest',
  },
  cmdDescription: 'Upgrade ReactIAC Runner to the latest version',
  cmdAlias: ['up'],
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  const version =
    args.version === 'latest' ? 'latest' : `versions/${args.version}`
  const url = `https://play.reactiac.dev/download/${version}/install.sh`
  const response = await fetch(url)
  const content = await response.text()

  await execa({
    stderr: 'inherit',
    stdout: 'inherit',
    input: content,
  })`sh`
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
