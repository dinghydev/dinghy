import type { CmdInput } from '@dinghy/cli'
import { runSlideImageCmd } from '../../services/slide/runSlideImageCmd.ts'
import { Args } from '@std/cli/parse-args'
export const schema: CmdInput = {
  description: 'Build slides into distribution files',
  args: [],
}

export const run = async (args: Args) => {
  await runSlideImageCmd(
    args,
    ['yarn', 'build'],
  )
}
