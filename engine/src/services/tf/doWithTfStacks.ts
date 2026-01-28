import { parseStackInfo } from './stackInfoUtils.ts'
import { dinghyAppConfig, DinghyError } from '@dinghy/cli'
import { doWithStacks } from '@dinghy/cli'
import { Args } from '@std/cli/parse-args'

export const doWithTfStacks = async (
  args: Args,
  callback: (stackInfo: any, args: Args) => Promise<void>,
) => {
  let anyStackFound = false
  await doWithStacks(
    dinghyAppConfig,
    args.stack,
    async (stackOptions: any) => {
      const stackInfo = parseStackInfo(args, stackOptions)
      if (stackInfo) {
        anyStackFound = true
        await callback(stackInfo, args)
      }
    },
  )
  if (!anyStackFound) {
    throw new DinghyError('No stack found')
  }
}
