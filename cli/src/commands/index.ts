import type { Args } from '@std/cli'
import { versionDetails } from '../utils/projectVersions.ts'
import { CMD_DEF_SYMBOL, CmdInput, OptionInput } from '../services/cli/types.ts'
import { loadCliCommands } from './commands.ts'
import { showHelp } from '../services/cli/showHelp.ts'
import { ENGINE_DOCKER_OPTIONS } from '../services/docker/runEngineCommand.ts'

export const schema: CmdInput = {
  description:
    'Dinghy CLI is a command-line tool for running Dinghy in local development to interact with Dinghy Engine',
  options: [
    {
      name: 'version',
      description: 'Show version',
      boolean: true,
      alias: 'v',
    },
  ],
}

export const run = async (args: Args) => {
  if (args.version) {
    versionDetails().map(console.log)
  } else {
    const commands = await loadCliCommands()
    showHelp(commands[CMD_DEF_SYMBOL] as any, commands, false)
  }
}

export const globalOptions: OptionInput[] = [
  {
    name: 'help',
    description: 'Show help',
    boolean: true,
    alias: 'h',
    env: false,
  },
  {
    name: 'app-home',
    description: 'The path to the Dinghy app home directory',
    env: 'APP_HOME',
  },
  {
    name: 'engine-version',
    description: 'The Dinghy Engine version to use',
    env: 'DINGHY_ENGINE_VERSION',
  },
  {
    name: 'engine-command',
    description: 'Force to run commands inside Dinghy Engine',
    boolean: true,
    env: false,
  },
  {
    name: 'debug',
    description: 'Enable debug mode',
    boolean: true,
    env: false,
  },
  {
    name: 'output',
    description: 'The path to the output directory',
    default: 'output',
  },
  ENGINE_DOCKER_OPTIONS,
]
