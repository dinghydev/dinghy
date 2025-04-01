import { runCommand } from '../../cli/src/utils/runCommand.ts'
import { setupDebug } from '../../cli/src/utils/setupDebug.ts'
import commands from './commands/index.ts'
import { OPTIONS_SYMBOL } from './types.ts'
import { checkVersion } from '../../cli/src/utils/checkVersion.ts'
import { loadConfig } from '../../cli/src/utils/loadConfig.ts'

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
