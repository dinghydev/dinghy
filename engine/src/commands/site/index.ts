import type { CmdInput, OptionInput } from '@dinghy/cli'
import { runDocusaurusImageCmd } from '../../services/docusaurus/runDocusaurusImageCmd.ts'
import { Args } from '@std/cli/parse-args'

/**
 * ## Examples
 *
 * To execute `docusaurus swizzle --list`, run:
 * ```sh
 * dinghy site swizzle --list
 * ```
 */
export const schema: CmdInput = {
  description: 'Run docusaurus command with arbitrary arguments.',
  args: [],
}

export const run = async (args: Args) => {
  await runDocusaurusImageCmd(
    args,
    ['yarn', 'docusaurus'],
  )
}

export const globalOptions: OptionInput[] = [
  {
    name: 'site-docker-options',
    description: 'Additional options to pass to the docker run command',
    multiple: true,
    env: 'DINGHY_SITE_DOCKER_OPTIONS',
  },
  {
    name: 'site-dir',
    description:
      'Path to the site base directory, default to site directory in app home if exists, otherwise current directory',
  },
  {
    name: 'site-build-dir',
    description: 'The build directory in output directory',
    default: 'site',
  },
  {
    name: 'port',
    description: 'Port to listen on',
  },
]
