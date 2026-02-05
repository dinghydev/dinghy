import { execa } from 'execa'
import { fetchLatestVersion } from '../utils/updateCheck.ts'
import { updateProjectVersion } from '../utils/updateProjectVersion.ts'
import Debug from 'debug'
import { CmdInput } from '../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'
import chalk from 'chalk'
const debug = Debug('upgrade')

export const schema: CmdInput = {
  description: 'Upgrade Dinghy Cli to latest or specified version.',
  options: [
    {
      name: 'version',
      description: 'The version to upgrade to',
      default: 'latest',
    },
    {
      name: 'skip-update-project',
      description:
        'By default, upgrade will also update your project engine version if `.dinghyrc` exist in current folder.',
      boolean: true,
    },
  ],
  alias: ['up'],
}
export const upgradeToVersion = async (version: string) => {
  console.log(`Upgrading Dinghy Cli to ${chalk.green(version)} ...`)

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

export const run = async (args: Args) => {
  let version = args.version
  if (!version.includes('-')) {
    const latestVersion = await fetchLatestVersion()
    version = latestVersion[version]
    if (!version) {
      throw new Error(`Unknown version ${args.version}`)
    }
    debug('resolved %s to version %s', args.version, version)
  }

  if (!args['skip-update-project']) {
    updateProjectVersion(version)
  }
  await upgradeToVersion(version)
}
