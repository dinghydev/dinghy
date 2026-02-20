import {
  appHomeMount,
  configGetEngineImage,
  configGetToolImage,
  devcontainer,
  dinghyAppConfig,
  getDockerEnvs,
  getDockerMounts,
  hostAppHome,
  projectVersionRelease,
  useEnvVar,
} from '@dinghy/cli'

export const schema = devcontainer.generationSchema

import { existsSync } from '@std/fs/exists'
import { dirname } from '@std/path'
import Debug from 'debug'
import { Args } from '@std/cli/parse-args'
import chalk from 'chalk'
import {
  resolveSiteConfig,
  resolveSiteConfigJson,
  resolveSiteDir,
} from '../services/docusaurus/runDocusaurusImageCmd.ts'
const debug = Debug('devcontainer')

export const run = async (args: Args) => {
  const configFolder = `${hostAppHome}/.devcontainer`
  if (existsSync(configFolder)) {
    console.log(
      'use existing .devcontainer config folder, skip generating .devcontainer.json',
    )
    return
  }

  const [siteConfig, siteDir] = await loadSiteConfig(args)

  const configFile = `${hostAppHome}/.devcontainer.json`
  const config: any = useEnvVar(['dinghy', 'devcontainer', 'json']) || {}
  config.name ??= hostAppHome.split('/').pop()
  config.runArgs ??= ['--name', config.name]
  if (!config.build) {
    if (siteConfig) {
      config.image = await configGetToolImage('site')
    } else {
      config.image = await configGetEngineImage()
    }
  }

  populateEnvs(config, siteConfig)
  populateMounts(config, siteConfig, siteDir!, args)

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
  config.workspaceFolder ??= args.workspace ||
    (siteConfig ? '/opt/docusaurus' : dirname(appHomeMount))
  // config.onCreateCommand ??= "on-devcontainer-create.ts";

  config.customizations ??= {
    vscode: {
      extensions: [
        // "ms-azuretools.vscode-docker",
        'ms-azuretools.vscode-containers',
        'denoland.vscode-deno',
        'unifiedjs.vscode-mdx',
      ],
      settings: {
        'remote.extensionKind': {
          'denoland.vscode-deno': ['workspace'],
        },
      },
    },
  }
  let extensions: any = useEnvVar(['dinghy', 'devcontainer', 'extensions'])
  if (extensions) {
    if (typeof extensions === 'string') {
      extensions = extensions.split(',')
    }
    config.customizations.vscode.extensions.push(...extensions)
    debug('extensions added: %O', extensions)
  }

  Deno.writeTextFileSync(configFile, JSON.stringify(config, null, 2))
  console.log(
    `Generated ${chalk.green(`${hostAppHome}/.devcontainer.json`)}`,
  )
}

function populateEnvs(config: any, siteConfig: any) {
  config.containerEnv = getDockerEnvs(config.containerEnv || {})
  config.containerEnv.DINGHY_CLI_VERSION = projectVersionRelease()
  config.containerEnv.DOCKER_IMAGE = Deno.env.get('DOCKER_IMAGE') ||
    config.image
  if (siteConfig) {
    resolveSiteConfigJson(siteConfig, config.containerEnv)
  }
}

function populateMounts(
  config: any,
  siteConfig: any,
  siteDir: string,
  args: Args,
) {
  if (config.mounts) {
    return
  }
  const mounts: any[] = [...(args.volumns || [])]
  if (args.volumns) {
    args.volumns?.map((mount: string) =>
      mounts.push({
        source: mount.split(':')[0],
        target: mount.split(':')[1],
      })
    )
  }
  if (siteConfig) {
    for (const f of Deno.readDirSync(siteDir)) {
      mounts.push({
        source: `${siteDir}/${f.name}`,
        target: `/opt/docusaurus/${f.name}`,
      })
    }
  } else {
    mounts.push({
      source: 'deno.jsonc',
      target: '/dinghy/engine/deno.jsonc',
    })
    mounts.push({
      source: 'deno.lock',
      target: '/dinghy/engine/deno.lock',
    })
    const vscodeConfigCheckFile = `${hostAppHome}/.vscode/launch.json`
    if (existsSync(vscodeConfigCheckFile)) {
      config.mounts.push(
        `source=${vscodeConfigCheckFile},target=/dinghy/engine/workspace/.vscode/launch.json,type=bind`,
      )
    }
  }
  config.mounts = getDockerMounts(mounts).map((mount) =>
    `source=${mount.source},target=${mount.target},type=bind`
  )
}

async function loadSiteConfig(args: Args): Promise<[any, string | undefined]> {
  if (args['engine'] || (args['site'] === undefined && !dinghyAppConfig.site)) {
    return [undefined, undefined]
  }
  const siteDir = resolveSiteDir(args)
  return [await resolveSiteConfig(siteDir), siteDir]
}
