import type { CmdInput } from '@dinghy/cli'
import { runAwscliImageCmd } from '../../services/aws/runAwscliImageCmd.ts'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description: 'Run bash command with awscli image',
  args: [],
}

export const run = async (args: Args) => {
  await runAwscliImageCmd(
    args,
    ['bash'],
  )
}
