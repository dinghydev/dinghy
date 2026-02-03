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
    name: 'site',
    description: 'Named site if there are multiple sites configured',
  },
  {
    name: 'site-dir',
    description: 'Path to the site base directory',
  },
  {
    name: 'site-output',
    description: 'The build output directory',
  },
  {
    name: 'port',
    description: 'Port to listen on',
  },
]
