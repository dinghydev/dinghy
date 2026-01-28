import type { CmdInput, OptionInput } from '@dinghy/cli'
import { runDocusaurusImageCmd } from '../../services/docusaurus/runDocusaurusImageCmd.ts'
import { Args } from '@std/cli/parse-args'

/**
 * ## Example usage
 *
 * To execute `docusaurus swizzle`, run:
 * ```sh
 * dinghy site swizzle
 * ```
 *
 * ### Double dash
 *
 * Dinghy will interpret any argument starting with `-` as a Dinghy option.
 *
 * To pass all subsequent arguments directly to docusaurus, use a double dash (`--`):
 *
 * ```sh
 * dinghy site -- swizzle --list
 * ```
 *
 * All arguments after `--` are forwarded to the docusaurus command unchanged.
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
