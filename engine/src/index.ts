import { cliRun } from '@dinghy/cli'
import commands from './commands/index.ts'
import Debug from 'debug'
const debug = Debug('dinghy-engine')

cliRun(commands, debug, true)
