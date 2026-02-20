import type { CmdInput } from '@dinghy/cli'
import { runDocusaurusImageCmd } from '../../services/docusaurus/runDocusaurusImageCmd.ts'
import { Args } from '@std/cli/parse-args'
export const schema: CmdInput = {
  description: 'Deploy site',
  args: [],
}

export const run = async (args: Args) => {
  await runDocusaurusImageCmd(
    args,
    ['yarn', 'docusaurus', 'deploy'],
  )
}
