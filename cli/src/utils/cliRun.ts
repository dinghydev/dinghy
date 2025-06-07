import { runCommand } from "./runCommand.ts";
import { Commands, OPTIONS_SYMBOL, ReactiacError } from "../types.ts";
import { updateCheck } from "./updateCheck.ts";
import { setupDebug } from "./setupDebug.ts";
import { loadGlobalConfig } from "./loadConfig.ts";
import Debug from "debug";
import { projectVersionRelease } from "./projectVersions.ts";
import chalk from "chalk";

export const cliRun = async (
  commands: Commands,
  debug: Debug.Debugger,
  isEngine: boolean,
) => {
  try {
    setupDebug();
    debug("started at %O with version %s", new Date(), projectVersionRelease());

    await loadGlobalConfig();
    await updateCheck(true);

    await runCommand({
      isEngine,
      prefix: [],
      envPrefix: [],
      args: Deno.args,
      originalArgs: Deno.args,
      commands,
      options: commands[OPTIONS_SYMBOL],
    });

    debug("finished at %O", new Date());
  } catch (e) {
    if (e instanceof ReactiacError) {
      console.error(chalk.red(e.message));
      Deno.exit(1);
    } else {
      console.error(e);
      throw e;
    }
  }
};
