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
import docker from './docker/index.ts'
import { runEngineCommand } from '../utils/runEngineCommand.ts'
import { versionDetails } from '../utils/projectVersions.ts'
import info from './info.ts'
import { createEngineCommand } from './createEngineCommand.ts'
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
    'Dinghy CLI is a command-line tool for running Dinghy in local development to interact with Dinghy Engine.',
  additionalOptions: {
    'Global Options': [
      {
        name: '--app-home',
        description: 'The path to the Dinghy app home directory',
      },
      {
        name: '--engine-version',
        description: 'The Dinghy Engine version to use',
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
  docker,
  info,

  render: createEngineCommand(
    'Render from .tsx files to target formats e.g. .drawio or .tf',
  ),
  diagram: createEngineCommand(
    'Diagram related operations, default is convert drawio files to png',
  ),
  tf: createEngineCommand('Terraform/OpenTofu related operations'),
  site: createEngineCommand('Operation for docusaurus.io based site'),
  deno: createEngineCommand('Run deno with in the probject'),
  check: createEngineCommand('Run static code analysis'),
  bash: createEngineCommand('Run interactive bash command with engine image'),
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
