import chalk from 'chalk'
import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { hostAppHome, requireStacksConfig } from '@dinghy/cli'
import { doWithTfStacks } from './doWithTfStacks.ts'
import { runTfImageCmd } from './runTfImageCmd.ts'
import {
  collectStackChanges,
  createTfOptions,
  tfOptionsPlan,
} from './stackInfoUtils.ts'
import Debug from 'debug'
const debug = Debug('tf:plan')
const options: any = createTfOptions({
  ...tfOptionsPlan,
  cmdDescription: 'Plan changes',
})

const run = async (_context: CommandContext, args: CommandArgs) => {
  await requireStacksConfig()
  const changedStacks: any[] = []
  await doWithTfStacks(args, async (stackInfo) => {
    const stackPath = `${args.output}/${stackInfo.name}`
    debug('Running terraform plan from %s', stackPath)
    await runTfImageCmd(
      stackPath,
      args,
      [
        'tf',
        'plan',
        `-lock=${args.lock}`,
        `-out=tf.plan`,
      ],
    )
    for (const format of ['json', 'txt']) {
      const planOutputFile = `${hostAppHome}/${stackPath}/tf.plan.${format}`
      debug('Formatting plan file to %s', planOutputFile)
      await runTfImageCmd(
        stackPath,
        args,
        [
          'tf',
          'show',
          format === 'json' ? '-json' : '-no-color',
          'tf.plan',
          '>',
          planOutputFile,
        ],
      )
      console.log('Formated plan ', planOutputFile)
      if (format === 'txt') {
        const changes = collectStackChanges(stackInfo, args)
        if (changes?.changesCount) {
          stackInfo.plan = changes
          changedStacks.push(stackInfo)
        }
      }
    }
  })
  if (changedStacks.length) {
    changedStacks.map((stackInfo) => {
      console.log(
        chalk.red(`${stackInfo.name} changes: ${stackInfo.plan.summary}`),
      )
    })
    if (changedStacks.length > 1) {
      console.log(
        chalk.red(`Changes found in ${changedStacks.length} stacks`),
      )
    }
  } else {
    console.log(
      chalk.green(
        `No changes found ${
          args.stack ? `in ${args.stack} stack` : 'in any stack'
        }`,
      ),
    )
  }
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
