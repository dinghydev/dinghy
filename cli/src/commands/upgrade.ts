import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import { execa } from 'execa'
import { fetchLatestVersion } from '../utils/updateCheck.ts'
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
  cmdDescription: 'Upgrade Dinghy Cli to latest or specified version',
  cmdAlias: ['up'],
}

export const upgradeToVersion = async (version: string) => {
  const url = 'https://play.dinghy.dev/download/install.sh'
  const response = await fetch(url)
  const content = await response.text()

  await execa({
    stderr: 'inherit',
    stdout: 'inherit',
    input: content,
    env: {
      DINGHY_VERSION: version,
    },
  })`sh`
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  let version = args.version
  if (!version.includes('-')) {
    const latestVersion = await fetchLatestVersion()
    version = latestVersion[version]
    if (!version) {
      throw new Error(`Unknown version ${args.version}`)
    }
    debug('upgrading to version %s', version)
  }

  await upgradeToVersion(version)
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
