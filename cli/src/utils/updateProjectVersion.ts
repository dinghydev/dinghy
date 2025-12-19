import { existsSync } from 'jsr:@std/fs'
import Debug from 'debug'
import * as yaml from '@std/yaml'
import chalk from 'chalk'
import { dinghyConfigFile } from './loadConfig.ts'
const debug = Debug('runCommand')

export const updateProjectVersion = (version: string, createConfig = false) => {
  if (!existsSync(dinghyConfigFile)) {
    if (!createConfig) {
      debug('dinghy config file not found, skipping update')
    } else {
      Deno.writeTextFileSync(
        dinghyConfigFile,
        yaml.stringify({ engine: { version } }),
      )
      console.log('Dinghy Config file not found, created: ', dinghyConfigFile)
    }
    return
  }

  const yamlText = Deno.readTextFileSync(dinghyConfigFile)
  let updatedConfig
  let previousVersion = null
  const config = yaml.parse(yamlText) as any
  if (config.engine) {
    if (config.engine.version) {
      if (config.engine.version === version) {
        console.log(
          `Dinghy Config ${chalk.gray(dinghyConfigFile)} already at version ${
            chalk.green(version)
          }`,
        )
        return
      }
      previousVersion = config.engine.version
      updatedConfig = yamlText.replaceAll(config.engine.version, version)
    } else {
      config.engine.version = version
    }
  } else {
    config.engine = { version }
  }

  if (!updatedConfig) {
    updatedConfig = yaml.stringify(config)
  }
  Deno.writeTextFileSync(dinghyConfigFile, updatedConfig)
  console.log(
    `Updated ${chalk.gray(dinghyConfigFile)} with engine.version: ${
      chalk.green(version)
    }${previousVersion ? ` (from: ${chalk.gray(previousVersion)})` : ''}`,
  )
}
