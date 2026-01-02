import { existsSync } from 'jsr:@std/fs'
import Debug from 'debug'
import chalk from 'chalk'
import { hostAppHome } from '../shared/home.ts'
const debug = Debug('runCommand')

export const updateProjectVersion = (version: string, createConfig = false) => {
  const dinghyConfigRcFile = `${hostAppHome}/.dinghyrc`
  const configLine = `DINGHY_ENGINE_VERSION=${version}`
  if (!existsSync(dinghyConfigRcFile)) {
    if (!createConfig) {
      debug('dinghy config file not found, skipping update')
    } else {
      Deno.writeTextFileSync(
        dinghyConfigRcFile,
        `${configLine}\n`,
      )
      console.log('Dinghy Config file not found, created: ', dinghyConfigRcFile)
    }
    return
  }

  const configRcText = Deno.readTextFileSync(dinghyConfigRcFile)
  let updatedConfig = ''
  let previousVersion: string | null = null
  configRcText.split('\n').forEach((line) => {
    if (line.startsWith('DINGHY_ENGINE_VERSION=')) {
      previousVersion = line.split('=')[1].trim()
      updatedConfig += configLine + '\n'
    } else {
      updatedConfig += line + '\n'
    }
  })

  if (previousVersion === version) {
    console.log(
      `Dinghy Config ${chalk.gray(dinghyConfigRcFile)} already at version ${
        chalk.green(version)
      }`,
    )
    return
  }
  if (!updatedConfig.includes(configLine)) {
    updatedConfig += configLine + '\n'
  }
  Deno.writeTextFileSync(dinghyConfigRcFile, updatedConfig)
  console.log(
    `Updated ${chalk.gray(dinghyConfigRcFile)} with DINGHY_ENGINE_VERSION=${
      chalk.green(version)
    }${previousVersion ? ` (from: ${chalk.gray(previousVersion)})` : ''}`,
  )
}
