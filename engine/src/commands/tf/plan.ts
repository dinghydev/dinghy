import { requireStacksConfig } from '@dinghy/cli'
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
        'tf-plan',
        `-lock=${args.lock}`,
      ],
    )
    await onEvent(`tf.stack.plan.finish`, stackInfo)
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
