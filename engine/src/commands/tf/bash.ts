import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import {
  DinghyError,
  hostAppHome,
  OPTIONS_SYMBOL,
  RUN_SYMBOL,
} from '@dinghy/cli'
import { runTfImageCmd } from './runTfImageCmd.ts'
import { createTfOptions, tfOptionsPlan } from './stackInfoUtils.ts'
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
  await doWithTfStacks(args, async (stackInfo) => {
    if (!firstStack) {
      firstStack = stackInfo
    }
  })
  if (!firstStack) {
    throw new DinghyError('No stack found')
  }
  let stackPath = `${args.output}/${firstStack.name}`
  if (!stackPath.startsWith('/')) {
    stackPath = `${hostAppHome}/${stackPath}`
  }
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
