import { createCombinedTfCmds } from './tf-combined-cmds.ts'

export default createCombinedTfCmds(
  'Show a preview of actions in selected targets. It combines render, init and plan commands. You may provide any addtiional arguments which are valid for those commands.',
  ['init', 'plan'],
)
