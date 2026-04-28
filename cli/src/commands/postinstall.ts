import { existsSync } from '@std/fs/exists'
import chalk from 'chalk'
import { dinghyHome } from '../shared/home.ts'
import Debug from 'debug'
import { cleanUpdateCheck } from '../utils/updateCheck.ts'
import { projectVersionRelease } from '../utils/projectVersions.ts'
import { CmdInput } from '../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'
import { resolveDinghySkills } from '../services/config/dinghySkill.ts'
import { runEngineCommand } from '../services/docker/runEngineCommand.ts'
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

const addToPathIfNotAlready = (shell: string, paths: string[]): boolean => {
  const setCommand = shell === 'fish'
    ? `set --export PATH ${dinghyHome}/bin $PATH`
    : `export PATH="$HOME/.dinghy/bin:$PATH"`
  return Boolean(paths.find((path) => {
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
  }))
}

const symlinkToUsrLocalBin = () => {
  const linkPath = '/usr/local/bin/dinghy'
  const target = `${dinghyHome}/bin/dinghy`
  try {
    Deno.lstatSync(linkPath)
    debug('%s already exists, skipping symlink', linkPath)
    return
  } catch (e) {
    if (!(e instanceof Deno.errors.NotFound)) {
      debug('lstat %s failed: %s', linkPath, e)
      return
    }
  }
  try {
    Deno.symlinkSync(target, linkPath)
    debug('symlinked %s -> %s', linkPath, target)
  } catch (e) {
    debug('failed to symlink %s: %s', linkPath, e)
  }
}

export const run = async (args: Args) => {
  const foundShellRc = [
    addToPathIfNotAlready('bash', ['.bashrc', '.profile']),
    addToPathIfNotAlready('zsh', ['.zshrc', '.zprofile']),
    addToPathIfNotAlready('fish', ['.config/fish/config.fish']),
  ].some(Boolean)
  if (!foundShellRc) {
    symlinkToUsrLocalBin()
  }

  await cleanUpdateCheck()

  const { dinghySkills } = resolveDinghySkills()
  if (dinghySkills) {
    await runEngineCommand(['skill'])
  }

  if (args.quiet) {
    return
  }

  const startCommand = ['dinghy --help']

  if (refreshCommand.length > 0) {
    debug(
      'Please run the following command to reload your shell:\n%O',
      refreshCommand,
    )
    console.log(
      `Installed Dinghy Cli ${
        chalk.dim(projectVersionRelease())
      } successfully.`,
    )

    console.log(`\n\nTo get started, run:

    ${refreshCommand.join('\n')}
    ${startCommand.join('\n    ')}
      `)
  } else {
    console.log(
      `Upgrade to ${chalk.dim(projectVersionRelease())} complete.`,
    )
    console.log(`\n\nTo get started, run:

    ${startCommand.join('\n    ')}
      `)
  }
}
