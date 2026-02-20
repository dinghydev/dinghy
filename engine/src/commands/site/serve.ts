import type { CmdInput } from '@dinghy/cli'
import { runDocusaurusImageCmd } from '../../services/docusaurus/runDocusaurusImageCmd.ts'
import { Args } from '@std/cli/parse-args'
export const schema: CmdInput = {
  description: 'Serve built static site',
  options: [
    {
      name: 'port',
      description: 'Port to listen on',
      default: '3000',
    },
  ],
  args: [],
}

export const run = async (args: Args) => {
  await runDocusaurusImageCmd(
    args,
    ['yarn', 'docusaurus', 'serve'],
  )
}
