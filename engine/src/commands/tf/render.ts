import { Args } from '@std/cli/parse-args'
import { run as renderRun } from '../render.ts'
import { createCombinedTfSchema } from '../../services/tf/createCombinedTfSchema.ts'

export const schema = createCombinedTfSchema(
  'Render tf.json files for selected stacks',
)
export const run = async (args: Args) => {
  await renderRun({
    ...args,
    format: ['tf'],
  })
}
