import type { CmdInput, OptionInput } from '@dinghy/cli'
import {
  CMD_DEF_SYMBOL,
  runCommands,
  showHelp,
  throwDinghyError,
  versionDetails,
} from '@dinghy/cli'
// import render from './render/index.ts'
// import diagram from './diagram/index.ts'
// import tf from './tf/index.ts'
// import aws from './aws/index.ts'
import Debug from 'debug'
// import upgrade from './upgrade.ts'
// import check from './check.ts'
// import deno from './deno.ts'
// import bash from './bash.ts'
// import site from './site/index.ts'
// import gh from './gh/index.ts'
import { Args } from '@std/cli/parse-args'
import { loadEngineCommands } from './commands.ts'
const debug = Debug('dinghy:main')

export const schema: CmdInput = {
  description: 'Dinghy Engine which runs commands inside a Docker container.',
  options: [
    {
      name: 'version',
      description: 'Show version',
      boolean: true,
      alias: 'v',
      env: false,
    },
    {
      name: 'commands',
      description:
        'Commands to run in sequence, parallel commands split by | from value',
      multiple: true,
      env: false,
    },
  ],
}

const runCommandInParallel = async (cmds: string[]) => {
  debug('Running commands in parallel %O', cmds)
  const commands = await loadEngineCommands()
  const promises = cmds.map(async (cmd) => {
    const args = cmd.split(' ')
    await runCommands(args, commands, true)
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
      throwDinghyError('Failed to run commands. See above for details.')
    }
  })
}

export const run = async (args: Args) => {
  if (args.version) {
    versionDetails().map(console.log)
  } else if (args.commands) {
    for (const command of args.commands) {
      await runCommandInParallel(command.split('|'))
    }
  } else {
    const commands = await loadEngineCommands()
    showHelp(commands[CMD_DEF_SYMBOL] as any, commands, true)
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
]
