import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '../../../../cli/src/types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../../../cli/src/types.ts'
import Debug from 'debug'
import png from './png.ts'
import render from '../render/index.ts'
import { runCommand } from '../../../../cli/src/utils/runCommand.ts'
const debug = Debug('diagram')

const options: CommandOptions = {
  boolean: ['debug'],
  description: {},
  arguments: {
    stack: {
      description: 'Stack name or tsx file name',
      required: false,
    },
  },
  cmdDescription: 'Render drawio files and generate png outputs',
}

const run = async (context: CommandContext, _args: CommandArgs) => {
  const remainArgs = context.originalArgs.slice(1)

  debug('running render command')
  await runCommand({
    ...context,
    prefix: [],
    envPrefix: [],
    args: ['render', ...remainArgs, '--format', 'diagram'],
    originalArgs: ['render', ...remainArgs, '--format', 'diagram'],
    commands: { render } as any,
    options: render[OPTIONS_SYMBOL],
  })
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
  png,
}

export default commands
