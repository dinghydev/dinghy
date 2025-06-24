import { createCombinedTfCmds } from './tf-combined-cmds.ts'

export default createCombinedTfCmds(
  'Show a preview of actions in selected targets',
  ['init', 'plan'],
)
