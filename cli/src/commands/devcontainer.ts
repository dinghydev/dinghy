import { existsSync } from '@std/fs/exists'
import { dirname } from '@std/path'
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import Debug from 'debug'
import { appHomeMount, configGet, hostAppHome } from '../utils/loadConfig.ts'
import { configGetEngineImage } from '../utils/dockerConfig.ts'
import { execa } from 'execa'
import { getDockerEnvs, getDockerMounts } from '../utils/dockerUtils.ts'
import { projectVersionRelease } from '../utils/projectVersions.ts'
const debug = Debug('init')

const options: CommandOptions = {
  collect: ['volumns'],
  string: ['workspace'],
  boolean: ['no-open'],
  description: {
    volumns: 'Additional volumns to mount to the devcontainer',
    workspace: 'The workspace folder to use in the devcontainer',
    'no-open':
      'Do not open the devcontainer. Generate .devcontainer.json only if not exist',
  },
  cmdDescription: 'Start the project in devcontainer',
  cmdAlias: ['dc'],
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  const devcontainerConfig = await prepareConfig(args)
  if (!args['no-open']) {
    if (devcontainerConfig) {
      debug('remove devcontainer %s if exits', devcontainerConfig.name)
      debug('running command from %s: devcontainer open', hostAppHome)
      await execa('docker', ['rm', '-f', devcontainerConfig.name as string], {
        stdio: 'ignore',
        reject: false,
      })
    }

    const result = await execa('devcontainer', ['open'], {
      cwd: hostAppHome,
      stdio: 'ignore',
      reject: false,
    })
    if (result.exitCode !== 0) {
      console.log(
        `Config generated at ${hostAppHome}/.devcontainer.json}`,
      )
      console.log(
        `Failed to open devcontainer, make sure it has been installed correctly https://code.visualstudio.com/docs/devcontainers/devcontainer-cli#_installation`,
      )
    }
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command

function prepareConfig(args: CommandArgs): any {
  const configFolder = `${hostAppHome}/.devcontainer`
  if (existsSync(configFolder)) {
    debug(
      'use existing .devcontainer config folder, skip generating .devcontainer.json',
    )
    return
  }

  const configFile = `${hostAppHome}/.devcontainer.json`
  const config: any = configGet(['devcontainer', 'json']) || {}
  config.name ??= hostAppHome.split('/').pop() as string
  config.runArgs ??= ['--name', config.name]
  if (!config.build) {
    config.image = configGetEngineImage()
  }

  config.containerEnv = getDockerEnvs(config.containerEnv || {})
  config.containerEnv.DINGHY_CLI_VERSION = projectVersionRelease()
  config.containerEnv.DOCKER_IMAGE = Deno.env.get('DOCKER_IMAGE') ||
    config.image

  config.mounts ??= getDockerMounts([
    ...(args.volumns || []).map((mount) => ({
      source: mount.split(':')[0],
      target: mount.split(':')[1],
    })),
    {
      source: 'deno.jsonc',
      target: '/dinghy/engine/deno.jsonc',
    },
    {
      source: 'deno.lock',
      target: '/dinghy/engine/deno.lock',
    },
  ]).map((mount) => `source=${mount.source},target=${mount.target},type=bind`)

  const vscodeConfigCheckFile = `${hostAppHome}/.vscode/launch.json`
  const vscodeConfigExist = existsSync(vscodeConfigCheckFile) &&
    Deno.readTextFileSync(vscodeConfigCheckFile).includes('dinghy')
  if (vscodeConfigExist) {
    config.mounts.push(
      `source=${vscodeConfigCheckFile},target=/dinghy/engine/workspace/.vscode/launch.json,type=bind`,
    )
  }
  // config.workspaceFolder ??= args.workspace ||
  //   (vscodeConfigExist ? appHomeMount : dirname(appHomeMount));
  config.workspaceFolder ??= args.workspace || dirname(appHomeMount)

  // config.onCreateCommand ??= "on-devcontainer-create.ts";

  config.customizations ??= {
    vscode: {
      extensions: [
        // "ms-azuretools.vscode-docker",
        'ms-azuretools.vscode-containers',
        'denoland.vscode-deno',
      ],
      settings: {
        'remote.extensionKind': {
          'denoland.vscode-deno': ['workspace'],
        },
      },
    },
  }

  let extensions: any = configGet(['devcontainer', 'extensions'])
  if (extensions) {
    if (typeof extensions === 'string') {
      extensions = extensions.split(',')
    }
    config.customizations.vscode.extensions.push(...extensions)
    debug('extensions added: %O', extensions)
  }

  Deno.writeTextFileSync(configFile, JSON.stringify(config, null, 2))
  debug('generated %s', configFile)
  if (args['no-open']) {
    console.log('generated', configFile)
  }
  return config
}
