import { requireStacksConfig } from '@dinghy/cli'
import { attachChangeToMR, isCi, isMr } from '../../utils/gitUtils.ts'
import { notifyChanges } from '../../utils/notificationUtils.ts'
import chalk from 'chalk'
import { collectStackChanges } from './stackInfoUtils.ts'
import Debug from 'debug'
import { onEvent } from '@dinghy/base-components'
import {
  triggerCiChangesApplied,
  triggerCiChangesDetected,
} from '../../utils/ciUtils.ts'
import { run as render } from '../../commands/tf/render.ts'
import { run as init } from '../../commands/tf/init.ts'
import { run as plan } from '../../commands/tf/plan.ts'
import { run as apply } from '../../commands/tf/apply.ts'
import { Args } from '@std/cli/parse-args'
import { doWithTfStacks } from './doWithTfStacks.ts'
import { createCombinedTfSchema } from './createCombinedTfSchema.ts'
const debug = Debug('tf:tf-combined-cmds')

const commandsMapping = {
  init,
  plan,
  apply,
}

export const createCombinedTfCmd = (
  description: string,
  cmds: string[],
) => {
  const schema = createCombinedTfSchema(description, cmds)
  const run = async (args: Args) => {
    debug('run combined tf commands %O', cmds)
    await requireStacksConfig()

    if (cmds.includes('render')) {
      await render(args)
    }

    const allStacks: any[] = []
    const changedStacks: any[] = []
    const isApply = cmds.includes('apply')

    await onEvent(`tf.stacks.start`, args)
    await doWithTfStacks(args, async (stackInfo: any) => {
      allStacks.push(stackInfo)
      for (const cmd of cmds) {
        if (cmd === 'render') {
          continue
        }
        await commandsMapping[cmd as keyof typeof commandsMapping](
          args,
          stackInfo,
        )
      }

      if (cmds.includes('plan') || cmds.includes('apply')) {
        const changes = collectStackChanges(stackInfo, args)
        if (changes?.changesCount) {
          stackInfo.plan = changes
          changedStacks.push(stackInfo)
          await onEvent(
            `tf.stack.changes.${isApply ? 'applied' : 'detected'}`,
            stackInfo,
          )
        }
      }
    })
    if (changedStacks.length) {
      await onEvent(
        `tf.stacks.changes.${isApply ? 'applied' : 'detected'}`,
        changedStacks,
      )
      if (isCi()) {
        await (isMr() ? attachChangeToMR : notifyChanges)(changedStacks)
        await (isApply ? triggerCiChangesApplied : triggerCiChangesDetected)(
          changedStacks,
          args,
        )
      } else {
        debug(
          `Ignore notification ${
            isApply ? 'and auto deploy ' : ''
          }in non-CI environment`,
        )
      }
    } else if (allStacks.length > 1) {
      console.log(chalk.green('No changes found in any stack'))
    }
    await onEvent(`tf.stacks.finish`, args, allStacks)
  }

  return { schema, run }
}
