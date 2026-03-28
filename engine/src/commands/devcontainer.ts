import {
  configGetEngineImage,
  configGetToolImage,
  createOutputMount,
  devcontainer,
  dinghyAppConfig,
  getDockerEnvs,
  getDockerMounts,
  hostAppHome,
  projectVersionRelease,
} from '@dinghy/cli'

export const schema = devcontainer.generationSchema

import { existsSync } from '@std/fs/exists'
import Debug from 'debug'
import { Args } from '@std/cli/parse-args'
import chalk from 'chalk'
import {
  resolveSiteConfig,
  resolveSiteConfigJson,
  resolveSiteDir,
} from '../services/docusaurus/runDocusaurusImageCmd.ts'
const debug = Debug('devcontainer')

type ProjectType = {
  type: 'engine' | 'site' | 'slide'
  siteConfig?: any
  siteDir?: string
}

export const run = async (args: Args) => {
  const configFolder = `${hostAppHome}/.devcontainer`
  if (existsSync(configFolder)) {
    console.log(
      'use existing .devcontainer config folder, skip generating .devcontainer.json',
    )
    return
  }

  const projectType = await detectProjectType(args)

  const configFile = `${hostAppHome}/.devcontainer.json`
  const config: any = dinghyAppConfig.devcontainer?.json || {}
  config.name ??= hostAppHome.split('/').pop()
  config.runArgs ??= ['--name', config.name]
  if (!config.build) {
    if (projectType.type === 'engine') {
      config.image = await configGetEngineImage()
    } else {
      config.image = await configGetToolImage(projectType.type)
    }
  }

  populateEnvs(config, projectType)
  populateMounts(config, projectType, args)
  config.workspaceFolder ??= args.workspace || '/workspace'
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
  const extensions: any = dinghyAppConfig.devcontainer?.extensions
  if (extensions) {
    config.customizations.vscode.extensions.push(...extensions)
    debug('extensions added: %O', extensions)
  }

  Deno.writeTextFileSync(configFile, JSON.stringify(config, null, 2))
  console.log(
    `Generated ${chalk.green(`${hostAppHome}/.devcontainer.json`)}`,
  )
}

function populateEnvs(config: any, projectType: ProjectType) {
  config.containerEnv = getDockerEnvs(config.containerEnv || {})
  config.containerEnv.DINGHY_CLI_VERSION = projectVersionRelease()
  if (projectType.siteConfig) {
    resolveSiteConfigJson(projectType.siteConfig, config.containerEnv)
  }
}

function populateMounts(
  config: any,
  projectType: ProjectType,
  args: Args,
) {
  if (config.mounts) {
    return
  }
  const mounts: any[] = []
  if (dinghyAppConfig.devcontainer?.volumes) {
    mounts.push(...dinghyAppConfig.devcontainer?.volumes)
  }
  if (projectType.siteConfig) {
    if (projectType.siteConfig?.volumes) {
      mounts.push(...projectType.siteConfig?.volumes)
    }
    for (const f of Deno.readDirSync(projectType.siteDir!)) {
      if (
        f.isDirectory &&
        !['output', 'node_modules', '.git'].includes(f.name)
      ) {
        mounts.push({
          source: `${projectType.siteDir}/${f.name}`,
          target: `/workspace/.dinghy/site/${f.name}`,
        })
      }
    }
  }
  if (projectType.type !== 'engine') {
    mounts.push(createOutputMount(projectType.type, args['output']))
  }
  config.mounts = getDockerMounts(projectType.type, mounts, true).map((mount) =>
    `source=${mount.source},target=${mount.target},type=bind`
  )
}

async function detectProjectType(
  args: Args,
): Promise<ProjectType> {
  let type: string | undefined = dinghyAppConfig.devcontainer?.type
  let siteConfig, siteDir
  if (args['engine']) {
    type = 'engine'
  } else if (args['site']) {
    type = 'site'
    const { siteConfig, siteDir } = await loadSiteConfig(args)
    return {
      type: 'site',
      siteConfig,
      siteDir,
    }
  } else if (args['slide']) {
    type = 'slide'
  }
  if (!type) {
    if (projectContainsApps()) {
      type = 'engine'
    } else if (existsSync(`${hostAppHome}/slides`)) {
      type = 'slide'
    } else {
      ;({ siteConfig, siteDir } = await loadSiteConfig(args))
      if (siteConfig) {
        type = 'site'
      }
    }
  }
  if (!type) {
    type = 'engine'
  } else if (type === 'site' && !siteDir) {
    ;({ siteConfig, siteDir } = await loadSiteConfig(args))
  }
  return { type: type as 'engine', siteConfig, siteDir }
}

function projectContainsApps(): boolean {
  for (const dirEntry of Deno.readDirSync(hostAppHome)) {
    if (dirEntry.name.endsWith('.tsx')) {
      return true
    }
  }
  return false
}

async function loadSiteConfig(
  args: Args,
): Promise<{ siteConfig: any; siteDir: string | undefined }> {
  const siteDir = resolveSiteDir(args)
  const siteConfig = await resolveSiteConfig(siteDir)
  if (Object.keys(siteConfig).length) {
    return { siteConfig, siteDir }
  }
  return { siteConfig: undefined, siteDir: undefined }
}
