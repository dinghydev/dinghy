import type { CmdInput } from '@dinghy/cli'
import { stackArgs } from './index.ts'
import { Args } from '@std/cli/parse-args'
import { runStacksCmd } from '../../services/tf/runStacksCmd.ts'

export const schema: CmdInput = {
  description: 'Run `terraform destroy` command for selected stacks',
  options: [
    {
      name: 'auto-approve',
      description: 'Auto approve the destroy operation',
      boolean: true,
      alias: 'a',
    },
  ],
  ...stackArgs,
}

export const run = async (args: Args) => {
  const destroyCmd = ['tf', 'destroy']
  if (args['auto-approve']) {
    destroyCmd.push('-auto-approve')
  }
  await runStacksCmd(destroyCmd, args)
}
