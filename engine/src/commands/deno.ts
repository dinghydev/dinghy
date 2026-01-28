import type { CmdInput } from '@dinghy/cli'
import { DinghyError } from '@dinghy/cli'
import { streamCmd } from '../utils/cmd.ts'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description: 'Run deno command with engine image',
  args: [],
}

export const run = async (args: Args) => {
  const result = await streamCmd(
    [
      'deno',
      ...args.extraOptions,
    ],
    undefined,
    false,
  )
  if (result.exitCode !== 0) {
    throw new DinghyError(`Failed to run deno, see error above`)
  }
}
