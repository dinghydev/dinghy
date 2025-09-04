import type { CommandArgs } from '@diac/cli'
import { parseTfOptions } from './tfOptions.ts'
import { diacAppConfig } from '@diac/cli'
import { doWithStacks } from '@diac/cli'

export const doWithTfStacks = async (
  args: CommandArgs,
  callback: (tfOptions: any, args: CommandArgs) => Promise<void>,
) => {
  await doWithStacks(
    diacAppConfig,
    args.stack,
    async (stackOptions: any) => {
      const tfOptions = parseTfOptions(args, stackOptions)
      if (tfOptions) {
        await callback(tfOptions, args)
      }
    },
  )
}
