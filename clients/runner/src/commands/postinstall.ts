import { existsSync } from '@std/fs/exists'
import type {
  CommandOptions,
  CommandArgs,
  Command,
  CommandContext,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import Debug from 'debug'
import { runtimeVersion } from '../utils/runtimeVersion.ts'
import { checkVersion, writeLatestVersion } from '../utils/checkVersion.ts'
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

const run = (_context: CommandContext, args: CommandArgs) => {
  saveRuntimeVersion()
  addToPathIfNotAlready('bash', ['.bashrc', '.profile'])
  addToPathIfNotAlready('zsh', ['.zshrc'])
  addToPathIfNotAlready('fish', ['.config/fish/config.fish'])

  if (args.quiet) {
    return
  }

  if (refreshCommand.length > 0) {
    debug(
      'Please run the following command to reload your shell:\n%O',
      refreshCommand,
    )
    console.log(`To get started, run:
    ${refreshCommand.join('\n')}
    reactiac --help
      `)
  } else {
    console.log(`Upgrade to ${runtimeVersion.runner.latest} complete. 

To get started, run:
    reactiac --help
      `)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
