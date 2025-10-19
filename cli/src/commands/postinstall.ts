import { existsSync } from '@std/fs/exists'
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import init from './init.ts'
import chalk from 'chalk'
import { runCommand } from '../utils/runCommand.ts'
import { dinghyHome } from '../utils/loadConfig.ts'
import Debug from 'debug'
import { cleanUpdateCheck } from '../utils/updateCheck.ts'
import { projectVersionRelease } from '../utils/projectVersions.ts'
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
  const setCommand = shell === 'fish'
    ? `set --export PATH ${dinghyHome}/bin $PATH`
    : `export PATH="$HOME/.dinghy/bin:$PATH"`
  paths.find((path) => {
    const configFile = `${Deno.env.get('HOME')}/${path}`
    if (existsSync(configFile)) {
      const text = Deno.readTextFileSync(configFile)
      if (text.includes('# Dinghy Runner')) {
        debug('%s is up to date', configFile)
      } else {
        debug('%s is not up to date', configFile)
        Deno.writeTextFileSync(
          configFile,
          `${text}\n# Dinghy Runner\n${setCommand}\n`,
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

const run = async (context: CommandContext, args: CommandArgs) => {
  addToPathIfNotAlready('bash', ['.bashrc', '.profile'])
  addToPathIfNotAlready('zsh', ['.zshrc', '.zprofile'])
  addToPathIfNotAlready('fish', ['.config/fish/config.fish'])

  await cleanUpdateCheck()

  if (args.quiet) {
    return
  }

  const initProject = Deno.env.get('INIT_PROJECT')
  if (initProject) {
    await runCommand({
      isEngine: false,
      prefix: ['init'],
      envPrefix: ['init'],
      args: ['--quiet'],
      originalArgs: ['init', '--quiet'],
      commands: init,
      rootCommands: context.rootCommands,
      options: init[OPTIONS_SYMBOL],
    })
  }

  const startCommand = initProject
    ? [`cd ${initProject}`, 'dinghy devcontainer']
    : ['dinghy --help']

  if (refreshCommand.length > 0) {
    debug(
      'Please run the following command to reload your shell:\n%O',
      refreshCommand,
    )
    console.log(
      `Installed Dinghy Runner ${
        chalk.dim(projectVersionRelease())
      } successfully.`,
    )

    console.log(`\n\nTo get started, run:

    ${refreshCommand.join('\n')}
    ${startCommand.join('\n    ')}
      `)
  } else {
    if (!initProject) {
      console.log(
        `Upgrade to ${chalk.dim(projectVersionRelease())} complete.`,
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
