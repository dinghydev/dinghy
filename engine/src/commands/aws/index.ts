import type { CmdInput } from '@dinghy/cli'
import { runAwscliImageCmd } from '../../services/aws/runAwscliImageCmd.ts'
import { Args } from '@std/cli/parse-args'

/**
 * ## Example usage
 *
 * To execute `aws s3 ls`, run:
 * ```sh
 * dinghy aws s3 ls
 * ```
 *
 * ### Double dash
 *
 * Dinghy will interpret any argument starting with `-` as a Dinghy option.
 *
 * To pass all subsequent arguments directly to AWS CLI, use a double dash (`--`):
 *
 * ```sh
 * dinghy aws -- s3 ls --no-cli-pager
 * ```
 *
 * All arguments after `--` are forwarded to the AWS command unchanged.
 */
export const schema: CmdInput = {
  description: 'Run aws command with awscli image',
  args: [],
}

export const run = async (args: Args) => {
  await runAwscliImageCmd(
    args,
    ['aws'],
  )
}
