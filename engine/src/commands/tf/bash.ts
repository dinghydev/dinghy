import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { OPTIONS_SYMBOL, DiacError, RUN_SYMBOL } from '@dinghy/cli'
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
  let firstStage: any = null
  // deno-lint-ignore require-await
  await doWithTfStacks(args, async (tfOptions) => {
    const { stackInfo } = tfOptions
    for (const stage of Object.values(stackInfo.stages)) {
      if (firstStage) {
        break
      }
      firstStage = stage
    }
  })
  if (!firstStage) {
    throw new DiacError('No stack/stage found')
  }
  const stagePath = `${args.output}/${firstStage.id}`
  if (!existsSync(stagePath)) {
    throw new DiacError(
      `Stage folder ${args.output} not exist. Run render or tf operation first`,
    )
  }
  await runTfImageCmd(
    stagePath,
    args,
    ['bash', ...subCommandArgs(context.originalArgs, 2)],
  )
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
