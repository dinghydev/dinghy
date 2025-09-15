import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '@dinghy/cli'
import {
  DinghyError,
  fetchLatestVersion,
  OPTIONS_SYMBOL,
  RUN_SYMBOL,
  updateProjectVersion,
} from '@dinghy/cli'
import Debug from 'debug'
const debug = Debug('upgrade')

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
  cmdDescription:
    'Upgrade/lock project Dinghy version, to the latest version by default',
  cmdAlias: ['up'],
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  let version = args.version
  if (!version.includes('-')) {
    const latestVersion = await fetchLatestVersion()
    version = latestVersion[version]
    if (!version) {
      throw new DinghyError(`Unknown version ${args.version}`)
    }
    debug('resolved %s to version %s', args.version, version)
  }
  updateProjectVersion(version)
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
