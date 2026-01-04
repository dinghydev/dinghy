import { createCombinedTfCmds } from './tf-combined-cmds.ts'

export default createCombinedTfCmds(
  'Create or update the resources in selected targets. It combines render, init, plan and apply commands. You may provide any addtiional arguments which are valid for those commands.',
  ['render', 'init', 'plan', 'apply'],
)
