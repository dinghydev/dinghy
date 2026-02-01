import type { CmdInput } from '@dinghy/cli'
import { cmdStream } from '@dinghy/cli'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description: 'Run deno command with engine image',
  args: [],
}

export const run = async (args: Args) => {
  await cmdStream(
    [
      'deno',
      ...args.extraOptions,
    ],
    true,
  )
}
