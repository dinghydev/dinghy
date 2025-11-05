import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import { execa } from 'execa'
import { fetchLatestVersion } from '../utils/updateCheck.ts'
import { updateProjectVersion } from '../utils/updateProjectVersion.ts'
import Debug from 'debug'
const debug = Debug('upgrade')

const options: CommandOptions = {
  string: ['version'],
  description: {
    version: 'The version to upgrade to',
    'update-project':
      'By default, upgrade will also update your project engine version if `dinghy.config.yaml` exist in current folder. You may pass `--no-update-project` to skip it.',
  },
  boolean: ['update-project'],
  negatable: ['update-project'],
  alias: {
    v: 'version',
  },
  default: {
    version: 'latest',
    'update-project': true,
  },
  cmdDescription: 'Upgrade Dinghy Cli to latest or specified version',
  cmdAlias: ['up'],
}

export const upgradeToVersion = async (version: string) => {
  const url = 'https://get.dinghy.dev/install.sh'
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
    debug('resolved %s to version %s', args.version, version)
  }

  if (args['update-project']) {
    updateProjectVersion(version)
  }
  await upgradeToVersion(version)
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
