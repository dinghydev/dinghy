import type { CommandArgs } from '@dinghy/cli'
import { parseTfOptions } from './tfOptions.ts'
import { dinghyAppConfig } from '@dinghy/cli'
import { doWithStacks } from '@dinghy/cli'

export const doWithTfStacks = async (
  args: CommandArgs,
  callback: (tfOptions: any, args: CommandArgs) => Promise<void>,
) => {
  await doWithStacks(
    dinghyAppConfig,
    args.stack,
    async (stackOptions: any) => {
      const tfOptions = parseTfOptions(args, stackOptions)
      if (tfOptions) {
        await callback(tfOptions, args)
      }
    },
  )
}
