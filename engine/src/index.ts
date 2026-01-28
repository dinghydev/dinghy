import { cliRun, setupDebug } from '@dinghy/cli'
import Debug from 'debug'
import { onEvent } from '../../core/base-components/src/utils/onEvent.ts'
import { loadEngineCommands } from './commands/commands.ts'
const debug = Debug('dinghy:engine')

if (import.meta.main) {
  try {
    setupDebug()
    await onEvent('engine.start')
    const engineCommands = await loadEngineCommands()
    await cliRun(engineCommands, debug, true)
    await onEvent('engine.finish')
  } catch (e) {
    await onEvent('engine.failed', e)
    throw e
  }
}
