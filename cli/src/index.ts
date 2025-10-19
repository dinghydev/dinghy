export { cliRun } from './utils/cliRun.ts'
export { default as commands } from './commands/index.ts'
export * from './shared/index.ts'
export * from './utils/index.ts'
export * from './types.ts'

import { cliRun } from './utils/cliRun.ts'
import commands from './commands/index.ts'
import Debug from 'debug'

if (import.meta.main) {
  const debug = Debug('dinghy-cli')
  cliRun(commands, debug, false)
}
