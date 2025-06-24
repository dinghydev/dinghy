import { cliRun } from '../../cli/src/utils/cliRun.ts'
import commands from './commands/index.ts'
import Debug from 'debug'
const debug = Debug('reactiac-engine')

cliRun(commands, debug, true)
