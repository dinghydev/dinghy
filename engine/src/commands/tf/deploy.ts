import { createCombinedTfCmds } from './tf-combined-cmds.ts'

export default createCombinedTfCmds(
  'Run terraform init and apply commands in sequence',
  ['init', 'apply'],
)
