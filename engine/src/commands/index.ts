import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '../../../cli/src/types.ts'
import {
  OPTIONS_SYMBOL,
  RUN_SYMBOL,
  throwReactiacError,
} from '../../../cli/src/types.ts'
import { showHelp } from '../../../cli/src/utils/showHelp.ts'
import render from './render/index.ts'
import diagram from './diagram/index.ts'
import tf from './tf/index.ts'
// import docker from "./docker/index.ts";
import { runCommand } from '../../../cli/src/utils/runCommand.ts'
import Debug from 'debug'
import { versionDetails } from '../../../cli/src/utils/projectVersions.ts'
const debug = Debug('reactiac:main')

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
  cmdDescription: 'ReactIAC Engine',
  additionalOptions: {
    'Global Options': [
      {
        name: '--app-home',
        description: 'The path to the ReactIAC app home directory',
      },
      {
        name: '--version',
        description: 'The docker image version of the ReactIAC app to use',
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

const runCommandInParallel = async (cmds: string[]) => {
  debug('Running commands in parallel %O', cmds)
  const promises = cmds.map(async (cmd) => {
    const args = cmd.split(' ')
    await runCommand({
      prefix: [],
      envPrefix: [],
      args,
      originalArgs: args,
      commands,
      options: commands[OPTIONS_SYMBOL],
      isEngine: true,
    })
  })
  await Promise.allSettled(promises).then((results) => {
    let failed = false
    results.map((result, i) => {
      if (result.status === 'rejected') {
        console.error(`Failed to run ${cmds[i]}: ${result.reason}`)
        failed = true
      }
    })
    if (failed) {
      throwReactiacError('Failed to run commands. See above for details.')
    }
  })
}

const run = async (context: CommandContext, args: CommandArgs) => {
  if (args.commands) {
    for (const command of args.commands) {
      await runCommandInParallel(command.split('|'))
    }
  } else if (args.version) {
    console.log(versionDetails())
  } else {
    showHelp(context)
  }
}

const commands: Commands = {
  render,
  diagram,
  // docker,
  tf,
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
