import type { CommandArgs } from '@reactiac/cli'
import { parseTfOptions } from './tfOptions.ts'
import { reactiacAppConfig } from '@reactiac/cli'
import { doWithStacks } from '../../../../cli/src/utils/index.ts'

export const doWithTfStacks = async (
  args: CommandArgs,
  callback: (tfOptions: any, args: CommandArgs) => Promise<void>,
) => {
  await doWithStacks(
    reactiacAppConfig,
    args.stack,
    async (stackOptions: any) => {
      const tfOptions = parseTfOptions(args, stackOptions)
      if (tfOptions) {
        await callback(tfOptions, args)
      }
    },
  )
}
