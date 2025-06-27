import { existsSync } from '@std/fs/exists'
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import { execa } from 'execa'
import chalk from 'chalk'
import { versionDetails } from '../utils/projectVersions.ts'
import { configGetEngineImage } from '../utils/dockerConfig.ts'
import {
  hostAppHome,
  reactiacHome,
  reactiacRcFiles,
} from '../utils/loadConfig.ts'

const options: CommandOptions = {
  description: {},
  cmdDescription:
    'Show information about runtime environment and project configuration',
}

type InfoItem = {
  label: string
  value: string
}

const existConfigFiles = () => {
  return [
    ...reactiacRcFiles,
    `${hostAppHome}/iac.yaml`,
  ].filter((path) => existsSync(path))
}

const binaryVersion = async (bin: string) => {
  const version = await execa(bin, ['--version']).then((result) => {
    let version = result.stdout.split('\n')[0]
    if (version.includes('version ')) {
      version = version.split('version ')[1].trim().split(' ')[0]
    }
    return version
  }).catch(() => chalk.red('NOT INSTALLED'))
  return version
}

const run = async (_context: CommandContext, _args: CommandArgs) => {
  const infoItems: InfoItem[] = []
  infoItems.push({ label: 'ReactIAC version', value: versionDetails() })
  infoItems.push({ label: 'ReactIAC home', value: reactiacHome })
  infoItems.push({
    label: 'ReactIAC config files',
    value: existConfigFiles().join(', '),
  })
  infoItems.push({ label: 'Engine image', value: configGetEngineImage() })
  infoItems.push({ label: 'Shell', value: Deno.env.get('SHELL') || 'unknown' })
  infoItems.push({
    label: 'git version',
    value: await binaryVersion('git'),
  })
  infoItems.push({
    label: 'docker client version',
    value: await binaryVersion('docker'),
  })
  infoItems.push({
    label: 'devcontainer version',
    value: await binaryVersion('devcontainer'),
  })
  infoItems.push({
    label: 'VSCode version',
    value: await binaryVersion('code'),
  })

  infoItems.map((item) => {
    console.log(chalk.bold(item.label + ':'), item.value)
  })
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
