import type { CmdInput } from '@dinghy/cli'
import { runDocusaurusImageCmd } from '../../services/docusaurus/runDocusaurusImageCmd.ts'
import { Args } from '@std/cli/parse-args'
export const schema: CmdInput = {
  description: 'Build site into static files',
  args: [],
}

export const run = async (args: Args) => {
  await runDocusaurusImageCmd(
    args,
    ['yarn', 'docusaurus', 'build'],
  )
}
