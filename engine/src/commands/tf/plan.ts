import { hostAppHome, requireStacksConfig } from '@dinghy/cli'
import { doWithTfStacks } from '../../services/tf/doWithTfStacks.ts'
import { runTfImageCmd } from '../../services/tf/runTfImageCmd.ts'
import Debug from 'debug'
import { createCombinedTfSchema } from '../../services/tf/createCombinedTfSchema.ts'
import { Args } from '@std/cli/parse-args'
import { onEvent } from '@dinghy/base-components'
const debug = Debug('tf:plan')
export const schema = createCombinedTfSchema(
  'Run `terraform plan` command for selected stacks',
  ['plan'],
)

export const run = async (args: Args, stackInfo?: any) => {
  const doWithStack = async (stackInfo: any) => {
    const stackPath = `${args.output}/${stackInfo.name}`
    debug('Running terraform plan from %s', stackPath)
    await onEvent(`tf.stack.plan.start`, stackInfo)
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
    await onEvent(`tf.stack.plan.finish`, stackInfo)
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
    }
  }

  if (stackInfo) {
    await doWithStack(stackInfo)
  } else {
    await requireStacksConfig()
    await doWithTfStacks(args, async (stackInfo: any) => {
      await doWithStack(stackInfo)
    })
  }
}
