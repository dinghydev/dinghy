import { createCombinedTfCmd } from '../../services/tf/createCombinedTfCmd.ts'

const commandDef = createCombinedTfCmd(
  'Combined init and apply commands.',
  ['init', 'apply'],
)

export const schema = commandDef.schema
export const run = commandDef.run
