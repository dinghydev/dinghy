import { runCommand } from './utils/runCommand.ts'
import { setupDebug } from './utils/setupDebug.ts'
import commands from './commands/index.ts'
import { OPTIONS_SYMBOL } from './types.ts'
import { checkVersion } from './utils/checkVersion.ts'
import { loadConfig } from './utils/loadConfig.ts'

setupDebug()
await loadConfig()
await checkVersion(true)

await runCommand({
  prefix: [],
  envPrefix: [],
  args: Deno.args,
  commands,
  options: commands[OPTIONS_SYMBOL],
})
