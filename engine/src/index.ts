import { cliRun } from '@diac/cli'
import commands from './commands/index.ts'
import Debug from 'debug'
const debug = Debug('diac-engine')

cliRun(commands, debug, true)
