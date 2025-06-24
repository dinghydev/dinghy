import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '../types.ts'
import upgrade from './upgrade.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import postinstall from './postinstall.ts'
import init from './init.ts'
import devcontainer from './devcontainer.ts'
import render from './render.ts'
import diagram from './diagram.ts'
import tf from './tf.ts'
import docker from './docker/index.ts'
import { runEngineCommand } from '../utils/runEngineCommand.ts'
import { versionDetails } from '../utils/projectVersions.ts'

const options: CommandOptions = {
  boolean: ['debug', 'help', 'version'],
  collect: ['commands'],
  flagsHidden: ['debug', 'help'],
  default: {
    debug: Boolean(Deno.env.get('DEBUG')),
  },
  description: {
    debug: 'Enable debug mode',
    help: 'Show help',
    version: 'Show version',
    commands: 'Commands to run in sequence, parallel commands split by |',
  },
  alias: {
    h: 'help',
    v: 'version',
    c: 'commands',
  },
  cmdDescription:
    'ReactIAC CLI is a command-line tool for running ReactIAC in local development to interact with ReactIAC engine.',
  additionalOptions: {
    'Global Options': [
      {
        name: '--app-home',
        description: 'The path to the ReactIAC app home directory',
      },
      {
        name: '--version',
        description: 'The ReactIAC engine version to use',
      },
      {
        name: '--debug',
        description: 'Enable debug mode',
      },
      {
        name: '-h, --help',
        description: 'Show help',
      },
      {
        name: '--output',
        description: 'The path to the output directory',
        options: '[default: output]',
      },
    ],
  },
}

const run = async (context: CommandContext, args: CommandArgs) => {
  if (args.version) {
    console.log(versionDetails())
  } else {
    await runEngineCommand(context)
  }
}

const commands: Commands = {
  init,
  upgrade,
  postinstall,
  devcontainer,
  render,
  diagram,
  docker,
  tf,
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
