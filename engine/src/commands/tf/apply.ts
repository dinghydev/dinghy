import chalk from 'chalk'
import type { CommandArgs, CommandContext, Commands } from '@diac/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@diac/cli'
import { isCi } from '../../utils/gitUtils.ts'
import { notifyChanges } from '../../utils/notificationUtils.ts'
import { runTfImageCmd } from './runTfImageCmd.ts'
import { createTfOptions, tfOptionsPlan } from './tfOptions.ts'
import { doWithTfStacks } from './doWithTfStacks.ts'
import { requireStacksConfig } from '@diac/cli'

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
  const changedStages: any[] = []
  // deno-lint-ignore require-await
  await doWithTfStacks(args, async (tfOptions) => {
    const { stackInfo } = tfOptions
    for (const stage of Object.values(stackInfo.stages)) {
      if ((stage as any).plan?.changesCount) {
        changedStages.push(stage)
      }
    }
  })
  if (changedStages.length) {
    try {
      for (const stage of changedStages) {
        const stagePath = `${args.output}/${stage.id}`
        await runTfImageCmd(
          stagePath,
          args,
          ['terraform', 'apply', args['plan-file']],
        )
      }
      if (isCi()) {
        await notifyChanges(changedStages)
      } else {
        console.log('Ignore notification in non-CI environment')
        changedStages.map((change) => {
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
          chalk.green(`Changes applied in ${changedStages.length} stages`),
        )
      }
    } catch (error) {
      if (isCi()) {
        await notifyChanges(changedStages, error as string)
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
