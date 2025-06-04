import type { CommandArgs } from "../../../../cli/src/types.ts";
import { parseTfOptions } from "./tfOptions.ts";
import { reactiacAppConfig } from "../../../../cli/src/utils/loadConfig.ts";
import { doWithStacks } from "../../../../cli/src/utils/index.ts";

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
