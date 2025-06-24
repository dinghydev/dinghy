import { cliRun } from './utils/cliRun.ts'
import commands from './commands/index.ts'
import Debug from 'debug'
const debug = Debug('reactiac-cli')

cliRun(commands, debug, false)
