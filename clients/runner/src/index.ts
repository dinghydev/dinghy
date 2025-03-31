import { runCommand } from './runCommand.ts'
import { setupDebug } from './utils/setupDebug.ts'
import commands from './commands/index.ts'
import { OPTIONS_SYMBOL } from './types.ts'
import { checkVersion } from './utils/checkVersion.ts'

setupDebug()
await checkVersion(true)

await runCommand({
  prefix: [],
  envPrefix: [],
  args: Deno.args,
  commands,
  options: commands[OPTIONS_SYMBOL],
})
