import { cliRun } from '@dinghy/cli'
import commands from './commands/index.ts'
import Debug from 'debug'
import { onEvent } from '../../core/base-components/src/utils/onEvent.ts'
const debug = Debug('dinghy-engine')

try {
  await onEvent('engine.start')
  await cliRun(commands, debug, true)
  await onEvent('engine.finish')
} catch (e) {
  await onEvent('engine.failed', e)
  throw e
}
