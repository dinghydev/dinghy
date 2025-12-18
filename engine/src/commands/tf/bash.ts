import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { DinghyError, OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { runTfImageCmd } from './runTfImageCmd.ts'
import { createTfOptions, tfOptionsPlan } from './tfOptions.ts'
import { doWithTfStacks } from './doWithTfStacks.ts'
import { requireStacksConfig } from '@dinghy/cli'
import { subCommandArgs } from '../../utils/subCommandArgs.ts'
import { existsSync } from '@std/fs/exists'

const options: any = createTfOptions({
  ...tfOptionsPlan,
  cmdDescription: 'Run bash command with tf image',
})

const run = async (context: CommandContext, args: CommandArgs) => {
  await requireStacksConfig()
  let firstStack: any = null
  // deno-lint-ignore require-await
  await doWithTfStacks(args, async (tfOptions) => {
    const { stackInfo } = tfOptions
    if (!firstStack) {
      firstStack = stackInfo.stack
    }
  })
  if (!firstStack) {
    throw new DinghyError('No stack found')
  }
  const stackPath = `${args.output}/${firstStack.id}`
  if (!existsSync(stackPath)) {
    throw new DinghyError(
      `Stack folder ${stackPath} not exist. Run render or tf operation first`,
    )
  }
  await runTfImageCmd(
    stackPath,
    args,
    ['bash', ...subCommandArgs(context.originalArgs, 2)],
  )
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
