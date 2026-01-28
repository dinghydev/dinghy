import { createCombinedTfCmd } from '../../services/tf/createCombinedTfCmd.ts'

const commandDef = createCombinedTfCmd(
  'Combined render, init and plan commands.',
  ['render', 'init', 'plan'],
)

export const schema = commandDef.schema
export const run = commandDef.run
