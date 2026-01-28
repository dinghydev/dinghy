import type { CmdInput } from '@dinghy/cli'
import { run as renderRun } from '../render.ts'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description: 'Render drawio files and generate png outputs',
  options: [
    {
      name: 'delete-drawio-file-after-render',
      description:
        'Delete the drawio file after successful generation the png file',
      boolean: true,
    },
  ],
  args: [{
    name: 'stack',
    description:
      'Stack name or tsx file name. If not specified, all stacks will be rendered',
  }],
}

export const run = async (args: Args) => {
  await renderRun({ ...args, format: ['diagram'] })
}
