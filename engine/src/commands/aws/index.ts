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
