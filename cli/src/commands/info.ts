import { existsSync } from '@std/fs/exists'
import { execa } from 'execa'
import chalk from 'chalk'
import { versionDetails } from '../utils/projectVersions.ts'
import { dinghyConfigFile, dinghyRcFiles } from '../utils/loadConfig.ts'
import { dinghyHome } from '../shared/home.ts'
import { CmdInput } from '../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description:
    'Show information about runtime environment and project configuration',
}

type InfoItem = {
  label: string
  values: string[]
}

const existConfigFiles = () => {
  return [
    ...dinghyRcFiles,
    dinghyConfigFile,
  ].filter((path) => existsSync(path))
}

const binaryVersion = async (bin: string) => {
  const version = await execa(bin, ['--version']).then((result) => {
    let version = result.stdout.split('\n')[0]
    if (version.includes('version ')) {
      version = version.split('version ')[1].trim().split(' ')[0]
      version = version.replace(',', '')
    }
    return version
  }).catch(() => chalk.red('NOT INSTALLED'))
  return version
}

export const run = async (_args: Args) => {
  const infoItems: InfoItem[] = []
  infoItems.push({
    label: 'Dinghy version',
    values: versionDetails(),
  })
  infoItems.push({ label: 'Dinghy home', values: [dinghyHome] })
  infoItems.push({
    label: 'Dinghy config files',
    values: existConfigFiles(),
  })
  infoItems.push({
    label: 'Shell',
    values: [Deno.env.get('SHELL') || 'unknown'],
  })
  infoItems.push({
    label: 'Git version',
    values: [await binaryVersion('git')],
  })
  infoItems.push({
    label: 'Docker client version',
    values: [await binaryVersion('docker')],
  })
  infoItems.push({
    label: 'Devcontainer version',
    values: [await binaryVersion('devcontainer')],
  })
  infoItems.push({
    label: 'VSCode version',
    values: [await binaryVersion('code')],
  })

  console.log(
    infoItems.map((item) =>
      `${chalk.bold(item.label.toUpperCase())}\n${
        item.values.map((line) => `  ${chalk.green(line)}`).join(
          '\n',
        )
      }`
    ).join('\n\n'),
  )
}
