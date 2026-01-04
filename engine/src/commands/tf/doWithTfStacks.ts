import type { CommandArgs } from '@dinghy/cli'
import { parseStackInfo } from './parseStackInfo.ts'
import { dinghyAppConfig } from '@dinghy/cli'
import { doWithStacks } from '@dinghy/cli'

export const doWithTfStacks = async (
  args: CommandArgs,
  callback: (stackInfo: any, args: CommandArgs) => Promise<void>,
) => {
  await doWithStacks(
    dinghyAppConfig,
    args.stack,
    async (stackOptions: any) => {
      const stackInfo = parseStackInfo(args, stackOptions)
      if (stackInfo) {
        await callback(stackInfo, args)
      }
    },
  )
}
