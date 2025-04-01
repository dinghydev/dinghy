import { existsSync } from '@std/fs/exists'
import type {
  CommandOptions,
  CommandArgs,
  Command,
  CommandContext,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import { runtimeVersion } from '../../../cli/src/utils/runtimeVersion.ts'
import { checkVersion, writeLatestVersion } from '../../../cli/src/utils/checkVersion.ts'
import init from './init.ts'
import chalk from 'chalk'
import { runCommand } from '../../../cli/src/utils/runCommand.ts'
import Debug from 'debug'
const debug = Debug('postinstall')

const options: CommandOptions = {
  boolean: ['quiet'],
  description: {
    quiet: 'Quiet mode',
  },
  alias: {
    q: 'quiet',
  },
  hidden: true,
  cmdDescription: 'Command to execute after installation',
}

const refreshCommand: string[] = []

const addToPathIfNotAlready = (shell: string, paths: string[]) => {
  const setCommand =
    shell === 'fish'
      ? `set --export PATH ${Deno.env.get('HOME')}/.reactiac/bin $PATH`
      : `export PATH="$HOME/.reactiac/bin:$PATH"`
  paths.find((path) => {
    const configFile = `${Deno.env.get('HOME')}/${path}`
    if (existsSync(configFile)) {
      const text = Deno.readTextFileSync(configFile)
      if (text.includes('# ReactIAC Runner')) {
        debug('%s is up to date', configFile)
      } else {
        debug('%s is not up to date', configFile)
        Deno.writeTextFileSync(
          configFile,
          `${text}\n# ReactIAC Runner\n${setCommand}\n`,
        )
        debug('added %s to %s', configFile)
        const activeShell = Deno.env.get('SHELL') || '/bin/sh'
        const shellName = activeShell.split('/').pop()
        if (shellName === shell) {
          if (shell === 'zsh') {
            refreshCommand.push(`exec ${shell}`)
          } else if (shell === 'fish') {
            refreshCommand.push(`source ${configFile}`)
          } else {
            refreshCommand.push(`. ${configFile}`)
          }
        }
      }
      return true
    }
    return false
  })
}

const saveRuntimeVersion = () => {
  const stateDir = `${Deno.env.get('HOME')}/.reactiac/states`
  if (!existsSync(stateDir)) {
    Deno.mkdirSync(stateDir)
  }

  writeLatestVersion(runtimeVersion)
  checkVersion()
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  saveRuntimeVersion()
  addToPathIfNotAlready('bash', ['.bashrc', '.profile'])
  addToPathIfNotAlready('zsh', ['.zshrc'])
  addToPathIfNotAlready('fish', ['.config/fish/config.fish'])

  if (args.quiet) {
    return
  }

  const initProject = Deno.env.get('INIT_PROJECT')
  if (initProject) {
    await runCommand({
      prefix: ['init'],
      envPrefix: ['init'],
      args: ['--quiet'],
      commands: init,
      options: init[OPTIONS_SYMBOL],
    })
  }

  const startCommand = initProject
    ? [`cd ${initProject}`, 'reactiac dev']
    : ['reactiac --help']

  if (refreshCommand.length > 0) {
    debug(
      'Please run the following command to reload your shell:\n%O',
      refreshCommand,
    )
    console.log(
      `Installed ReactIAC Runner ${chalk.dim(runtimeVersion.runner.latest)} successfully.`,
    )

    console.log(`\n\nTo get started, run:

    ${refreshCommand.join('\n')}
    ${startCommand.join('\n    ')}
      `)
  } else {
    if (!initProject) {
      console.log(
        `Upgrade to ${chalk.dim(runtimeVersion.runner.latest)} complete.`,
      )
    }
    console.log(`\n\nTo get started, run:

    ${startCommand.join('\n    ')}
      `)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
