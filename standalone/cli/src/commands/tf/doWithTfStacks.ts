import type { CommandArgs } from "../../types.ts";
import { parseTfOptions } from "./tfOptions.ts";
import { reactiacAppConfig } from "../../utils/loadConfig.ts";
import { doWithStacks } from "../../utils/stackUtils.ts";

export const doWithTfStacks = async (
  args: CommandArgs,
  callback: (tfOptions: any, args: CommandArgs) => Promise<void>,
) => {
  await doWithStacks(
    reactiacAppConfig,
    args.stack,
    async (stackOptions: any) => {
      const tfOptions = parseTfOptions(args, stackOptions);
      if (tfOptions) {
        await callback(tfOptions, args);
      }
    },
  );
};
