import { cliRun } from '@reactiac/cli'
import commands from './commands/index.ts'
import Debug from 'debug'
const debug = Debug('reactiac-engine')

cliRun(commands, debug, true)
