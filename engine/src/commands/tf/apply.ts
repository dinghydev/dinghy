import chalk from 'chalk'
import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { isCi } from '../../utils/gitUtils.ts'
import { notifyChanges } from '../../utils/notificationUtils.ts'
import { runTfImageCmd } from './runTfImageCmd.ts'
import { createTfOptions, tfOptionsPlan } from './tfOptions.ts'
import { doWithTfStacks } from './doWithTfStacks.ts'
import { requireStacksConfig } from '@dinghy/cli'

const options: any = createTfOptions({
  ...tfOptionsPlan,
  cmdDescription: 'Apply pending planned changes',
})

const changeSummaryWording = (summary: any) => {
  return summary.replaceAll('to add', 'added').replaceAll(
    'to change',
    'changed',
  ).replaceAll('to destroy', 'destroyed')
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  await requireStacksConfig()
  const changedStacks: any[] = []
  // deno-lint-ignore require-await
  await doWithTfStacks(args, async (tfOptions) => {
    const { stackInfo } = tfOptions
    if ((stackInfo.stack as any).plan?.changesCount) {
      changedStacks.push(stackInfo.stack)
    }
  })
  if (changedStacks.length) {
    try {
      for (const stack of changedStacks) {
        const stackPath = `${args.output}/${stack.id}`
        await runTfImageCmd(
          stackPath,
          args,
          ['tf', 'apply', args['plan-file']],
        )
      }
      if (isCi()) {
        await notifyChanges(changedStacks)
      } else {
        console.log('Ignore notification in non-CI environment')
        changedStacks.map((change) => {
          console.log(
            chalk.red(
              `${change.id} changes: ${
                changeSummaryWording(
                  change.plan.summary,
                )
              }`,
            ),
          )
        })
        console.log(
          chalk.green(`Changes applied in ${changedStacks.length} stacks`),
        )
      }
    } catch (error) {
      if (isCi()) {
        await notifyChanges(changedStacks, error as string)
      } else {
        console.log(chalk.red('Failed to applying changes'))
      }
      throw error
    }
  } else {
    console.log(chalk.green('No changes found'))
  }
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
