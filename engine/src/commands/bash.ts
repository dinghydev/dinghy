import type { CmdInput } from '@dinghy/cli'
import { streamCmd } from '../utils/cmd.ts'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description: 'Run bash command with engine image',
  args: [],
}

export const run = async (args: Args) => {
  await streamCmd(
    [
      'bash',
      ...args.extraOptions,
    ],
    undefined,
    false,
  )
}
