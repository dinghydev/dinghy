import { existsSync } from '@std/fs/exists'
import { dirname } from '@std/path'
import type {
  CommandOptions,
  CommandArgs,
  Command,
  CommandContext,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import { execa } from 'execa'
import chalk from 'chalk'
import Debug from 'debug'
import {
  configGet,
  configGetDockerImage,
  reactiacAppHome,
  reactiacRc,
} from '../../../cli/src/utils/loadConfig.ts'
import { streamCmd } from '../../../cli/src/utils/cmd.ts'
const debug = Debug('init')

const options: CommandOptions = {
  description: {},
  cmdDescription: 'Start the project in devcontainer',
  cmdAlias: ['dc'],
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  await prepareConfig(args)
  await streamCmd(['devcontainer', 'open'])
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command

function prepareConfig(args: CommandArgs) {
  const configFolder = `${reactiacAppHome}/.devcontainer`
  if (existsSync(configFolder)) {
    debug(
      'use existing .devcontainer config folder, skip generating .devcontainer.json',
    )
    return
  }

  const configFile = `${reactiacAppHome}/.devcontainer.json`
  const config = configGet(['devcontainer']) || {}
  config.name ??= reactiacAppHome.split('/').pop() as string
  config.runArgs ??= ['--name', config.name]
  if (!config.build) {
    config.image = configGetDockerImage()
  }

  config.containerEnv ??= {}
  const envs = Object.entries(reactiacRc)
  if (envs.length > 0) {
    for (const [key, value] of envs) {
      config.containerEnv[key] = value
    }
  }

  config.mounts ??= []

  const addMountIfExists = (source: string, target: string) => {
    if (existsSync(source)) {
      config.mounts.push(`source=${source},target=${target},type=bind`)
    }
  }

  config.containerEnv.APP_HOME ??= reactiacAppHome
  config.workspaceMount ??= `source=${reactiacAppHome},target=${reactiacAppHome},type=bind`
  config.workspaceFolder ??= dirname(config.containerEnv.APP_HOME)
  config.onCreateCommand ??= `ln -s /workspace/.vscode /workspace/deno.jsonc /workspace/deno.lock ${config.workspaceFolder}/`

  addMountIfExists(`${reactiacAppHome}/deno.jsonc`, '/workspace/deno.jsonc')
  addMountIfExists(`${reactiacAppHome}/deno.lock`, '/workspace/deno.lock')
  addMountIfExists('/var/run/docker.sock', '/var/run/docker.sock')
  addMountIfExists(`${Deno.env.get('HOME')}/.aws`, '/root/.aws')
  addMountIfExists(`${Deno.env.get('HOME')}/.ssh`, '/root/.ssh')
  addMountIfExists(`${Deno.env.get('HOME')}/.npmrc`, '/root/.npmrc')
  addMountIfExists(`${Deno.env.get('HOME')}/.docker`, '/root/.docker')

  config.customizations ??= {
    vscode: {
      extensions: ['ms-azuretools.vscode-docker', 'denoland.vscode-deno'],
      settings: {
            "remote.extensionKind": {
              "ms-azuretools.vscode-docker": [ "ui" ],
              "denoland.vscode-deno": [ "workspace" ]
          }
      }
    },
  }
  Deno.writeTextFileSync(configFile, JSON.stringify(config, null, 2))
  debug('generated %s', configFile)
}
