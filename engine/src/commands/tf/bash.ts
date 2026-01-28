import type { CmdInput } from '@dinghy/cli'
import { Args } from '@std/cli/parse-args'
import { runStacksCmd } from '../../services/tf/runStacksCmd.ts'
import { stackArgs } from './index.ts'

export const schema: CmdInput = {
  description: 'Run bash/tofu/terraform with tf image on selected stack',
  alias: ['tofu', 'terraform'],
  ...stackArgs,
}

export const run = async (args: Args) => {
  await runStacksCmd([args.originalArgs[1]], args, undefined, true)
}
