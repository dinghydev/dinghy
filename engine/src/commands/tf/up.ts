import { createCombinedTfCmd } from '../../services/tf/createCombinedTfCmd.ts'

const commandDef = createCombinedTfCmd(
  'Combined render, init, plan and apply commands.',
  ['render', 'init', 'plan', 'apply'],
)

export const schema = commandDef.schema
export const run = commandDef.run
