import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { runTfImageCmd } from './runTfImageCmd.ts'
import { createTfOptions, tfOptionsPlan } from './stackInfoUtils.ts'
import { doWithTfStacks } from './doWithTfStacks.ts'
import { requireStacksConfig } from '@dinghy/cli'

const options: any = createTfOptions({
  ...tfOptionsPlan,
  boolean: ['auto-approve'],
  description: {
    'auto-approve': 'Auto approve the destroy operation',
  },
  cmdDescription: 'Destroy all managed resources',
})

const run = async (_context: CommandContext, args: CommandArgs) => {
  await requireStacksConfig()
  await doWithTfStacks(args, async (stackInfo) => {
    const stackPath = `${args.output}/${stackInfo.name}`
    const destroyArgs = ['tf', 'destroy']
    if (args['auto-approve']) {
      destroyArgs.push('-auto-approve')
    }
    await runTfImageCmd(
      stackPath,
      args,
      destroyArgs,
    )
  })
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
