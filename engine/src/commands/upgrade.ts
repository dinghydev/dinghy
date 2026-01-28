import type { CmdInput } from '@dinghy/cli'
import {
  DinghyError,
  fetchLatestVersion,
  updateProjectVersion,
} from '@dinghy/cli'
import Debug from 'debug'
import { Args } from '@std/cli/parse-args'
const debug = Debug('upgrade')

export const schema: CmdInput = {
  description: 'Upgrade/lock project Dinghy version.',
  options: [
    {
      name: 'version',
      description: 'The version to upgrade to',
      default: 'latest',
      alias: 'v',
    },
  ],
  alias: ['up'],
}

export const run = async (args: Args) => {
  let version = args.version
  if (!version.includes('-')) {
    const latestVersion = await fetchLatestVersion()
    version = latestVersion[version]
    if (!version) {
      throw new DinghyError(`Unknown version ${args.version}`)
    }
    debug('resolved %s to version %s', args.version, version)
  }
  updateProjectVersion(version, true)
}
