import { existsSync } from '@std/fs/exists'
import chalk from 'chalk'
import { dinghyHome } from '../shared/home.ts'
import Debug from 'debug'
import { cleanUpdateCheck } from '../utils/updateCheck.ts'
import { projectVersionEngine } from '../utils/projectVersions.ts'
import { CmdInput } from '../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'
import { run as initRun } from './init.ts'
const debug = Debug('postinstall')

export const schema: CmdInput = {
  description: 'Command to execute after installation',
  hidden: true,
  options: [
    {
      name: 'quiet',
      description: 'Quiet mode',
      boolean: true,
      default: true,
      alias: 'q',
    },
  ],
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

export const run = async (args: Args) => {
  addToPathIfNotAlready('bash', ['.bashrc', '.profile'])
  addToPathIfNotAlready('zsh', ['.zshrc', '.zprofile'])
  addToPathIfNotAlready('fish', ['.config/fish/config.fish'])

  await cleanUpdateCheck()

  if (args.quiet) {
    return
  }

  const initProject = Deno.env.get('INIT_PROJECT')
  if (initProject) {
    await initRun({ quiet: true } as any)
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
      `Installed Dinghy Cli ${chalk.dim(projectVersionEngine())} successfully.`,
    )

    console.log(`\n\nTo get started, run:

    ${refreshCommand.join('\n')}
    ${startCommand.join('\n    ')}
      `)
  } else {
    if (!initProject) {
      console.log(
        `Upgrade to ${chalk.dim(projectVersionEngine())} complete.`,
      )
    }
    console.log(`\n\nTo get started, run:

    ${startCommand.join('\n    ')}
      `)
  }
}
