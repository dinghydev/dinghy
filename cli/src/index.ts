export { cliRun } from './utils/cliRun.ts'
export * from './shared/index.ts'
export * from './utils/index.ts'
export * from './types.ts'
export * as info from './commands/info.ts'
export * as devcontainer from './commands/devcontainer.ts'
export { loadCommands } from './services/cli/loadCommands.ts'
export { runCommands } from './services/cli/runCommands.ts'
export { showHelp } from './services/cli/showHelp.ts'
export { configGetToolImage } from './services/config/configGetToolImage.ts'
export { configGetEngineImage } from './services/config/configGetEngineImage.ts'
export {
  CMD_DEF_SYMBOL,
  type CmdDefinition,
  type CmdInput,
  type OptionInput,
} from './services/cli/types.ts'
export {
  run as metadataRun,
  schema as metadataSchema,
} from './commands/metadata.ts'

import { cliRun } from './utils/cliRun.ts'
import Debug from 'debug'
import { loadCliCommands } from './commands/commands.ts'
import { setupDebug } from './utils/setupDebug.ts'

if (import.meta.main) {
  setupDebug()
  const commands = await loadCliCommands()
  await cliRun(commands, Debug('dinghy:cli'), false)
}
