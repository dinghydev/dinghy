import chalk from 'chalk'
import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { isCi } from '../../utils/gitUtils.ts'
import { notifyChanges } from '../../utils/notificationUtils.ts'
import { runTfImageCmd } from './runTfImageCmd.ts'
import {
  collectStackChanges,
  createTfOptions,
  tfOptionsPlan,
} from './stackInfoUtils.ts'
import { doWithTfStacks } from './doWithTfStacks.ts'
import { requireStacksConfig } from '@dinghy/cli'
import Debug from 'debug'
const debug = Debug('tf:apply')

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
  await doWithTfStacks(args, async (stackInfo) => {
    const changes = collectStackChanges(stackInfo, args)
    if (changes?.changesCount) {
      stackInfo.plan = changes
      changedStacks.push(stackInfo)
    }
  })
  if (changedStacks.length) {
    try {
      for (const stack of changedStacks) {
        const stackPath = `${args.output}/${stack.name}`
        await runTfImageCmd(
          stackPath,
          args,
          ['tf', 'apply', 'tf.plan'],
        )
      }
      if (isCi()) {
        await notifyChanges(changedStacks)
      } else {
        debug('Ignore notification in non-CI environment')
        changedStacks.map((stackInfo) => {
          console.log(
            chalk.red(
              `${stackInfo.name} changes: ${
                changeSummaryWording(
                  stackInfo.plan.summary,
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
