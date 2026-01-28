import { Args } from '@std/cli/parse-args'
import { createCombinedTfSchema } from '../../services/tf/createCombinedTfSchema.ts'
import { runStacksCmd } from '../../services/tf/runStacksCmd.ts'

export const schema = createCombinedTfSchema(
  'Run `terraform apply` command for selected stacks',
  ['apply'],
)

export const run = async (args: Args, stackInfo?: any) => {
  const applyCmd = ['tf', 'apply', 'tf.plan']
  await runStacksCmd(applyCmd, args, stackInfo)
}
