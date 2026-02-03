import { type CmdInput, cmdStreamAndCapture } from '@dinghy/cli'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description: 'Run bash command with engine image',
  args: [],
}

export const run = async (args: Args) => {
  await cmdStreamAndCapture(
    [
      'bash',
      ...args.extraOptions,
    ],
  )
}
