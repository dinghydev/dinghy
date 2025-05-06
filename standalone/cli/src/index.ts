import { runCommand } from "./utils/runCommand.ts";
import commands from "./commands/index.ts";
import { OPTIONS_SYMBOL } from "./types.ts";
import { updateCheck } from "./utils/updateCheck.ts";
import { setupDebug } from "./utils/setupDebug.ts";
import { loadConfig } from "./utils/loadConfig.ts";
import Debug from "debug";
const debug = Debug("reactiac");
setupDebug();
debug("started at %O", new Date());

await loadConfig();
await updateCheck(true);

await runCommand({
  prefix: [],
  envPrefix: [],
  args: Deno.args,
  originalArgs: Deno.args,
  commands,
  options: commands[OPTIONS_SYMBOL],
});

debug("finished at %O", new Date());
