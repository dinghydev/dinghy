import { DinghyError, hostAppHome } from '@dinghy/cli'
import { runTfImageCmd } from './runTfImageCmd.ts'
import { doWithTfStacks } from './doWithTfStacks.ts'
import { requireStacksConfig } from '@dinghy/cli'
import { existsSync } from '@std/fs/exists'
import { Args } from '@std/cli/parse-args'
import { onEvent } from '@dinghy/base-components'

export const runStacksCmd = async (
  cmd: string[],
  args: Args,
  stackInfo?: any,
  firstOnly?: boolean,
) => {
  const actualCmd = cmd[1] || cmd[0]

  const doWithStack = async (stackInfo: any) => {
    let stackPath = `${args.output}/${stackInfo.name}`
    if (!stackPath.startsWith('/')) {
      stackPath = `${hostAppHome}/${stackPath}`
    }
    if (!existsSync(stackPath)) {
      throw new DinghyError(
        `Stack folder ${stackPath} not exist. Run render or tf operation first`,
      )
    }
    await onEvent(`tf.stack.${actualCmd}.start`, stackInfo)
    await runTfImageCmd(
      stackPath,
      args,
      cmd,
    )
    await onEvent(`tf.stack.${actualCmd}.finish`, stackInfo)
  }

  if (stackInfo) {
    await doWithStack(stackInfo)
  } else {
    await requireStacksConfig()
    let isFirst = true
    await doWithTfStacks(args, async (stackInfo) => {
      if (firstOnly && !isFirst) {
        return
      }
      isFirst = false
      await doWithStack(stackInfo)
    })
  }
}
