import {
  configGetToolImage,
  createOutputMount,
  deepMerge,
  dinghyAppConfig,
  DinghyError,
  hostAppHome,
  runDockerCmd,
} from '@dinghy/cli'
import { existsSync } from 'node:fs'
import * as yaml from '@std/yaml'
import { deployToS3 } from '../../services/docusaurus/deployToS3.ts'
import path from 'node:path'
import Debug from 'debug'
import { onEvent } from '@dinghy/base-components'
import { Args } from '@std/cli/parse-args'
const debug = Debug('runDocusaurusCmd')

export const resolveSiteDir = (args: Args) => {
  let siteDir = args['site-dir']
  if (!siteDir) {
    if (existsSync(path.join(hostAppHome, 'site'))) {
      siteDir = path.join(hostAppHome, 'site')
    } else {
      siteDir = hostAppHome
    }
  }
  if (!siteDir.startsWith('/')) {
    siteDir = path.join(hostAppHome, siteDir)
  }
  if (!existsSync(siteDir)) {
    throw new DinghyError(
      `Site dir ${siteDir} not exists`,
      'SITE_DIR_NOT_EXISTS',
    )
  }
  debug('Resolved site dir %s', siteDir)
  return siteDir
}

const resolveOutputDir = (args: Args) => {
  let outputDir = args['output']
  if (!outputDir.startsWith('/')) {
    outputDir = `${hostAppHome}/${outputDir}`
  }
  outputDir = `${outputDir}/${args['site-build-dir']}`
  debug('Resolved site output dir %s', outputDir)
  return outputDir
}

export const resolveSiteConfig = (siteDir: string): any => {
  const configFiles = [
    `${siteDir}/../docusaurus.config.yml`,
    `${siteDir}/docusaurus.config.yml`,
    `${siteDir}/site/docusaurus.config.yml`,
    `${siteDir}/config/site/docusaurus.config.yml`,
  ]
  const configs: any[] = []
  if (dinghyAppConfig.site) {
    configs.push(dinghyAppConfig.site)
  }
  for (const file of configFiles) {
    if (existsSync(file)) {
      configs.push(yaml.parse(Deno.readTextFileSync(file)) as any)
    }
  }
  if (configs.length === 1) {
    return configs[0]
  } else if (configs.length > 1) {
    const result = {}
    for (const c of configs) {
      deepMerge(result, c)
    }
    return result as any
  } else {
    return {}
  }
}

export const resolveSiteConfigJson = (siteConfig: any, target: any) => {
  const { volumes: _volumes, deploy: _deploy, ...restSiteConfig } = siteConfig
  if (Object.keys(restSiteConfig).length > 0) {
    target['DINGHY_SITE_CONFIG_JSON'] = JSON.stringify(restSiteConfig)
  }
}

export const runDocusaurusImageCmd = async (
  args: Args,
  cmd: string[],
) => {
  const actualCmd = cmd.slice(-1)[0]
  await onEvent(`site.${actualCmd}.start`, args)
  const siteDir = await resolveSiteDir(args)
  const siteConfig = await resolveSiteConfig(siteDir)

  const dockerEnvs = {} as Record<string, string>
  const { volumes, deploy } = siteConfig
  if (deploy?.s3Url && actualCmd === 'deploy') {
    const outputDir = await resolveOutputDir(args)
    return await deployToS3(args, outputDir, siteConfig)
  }
  resolveSiteConfigJson(siteConfig, dockerEnvs)
  const image = await configGetToolImage('site')
  const siteOptions = []
  const dockerArgs: string[] = args['site-docker-options'] || []
  if (args['port']) {
    dockerArgs.push('-p', `${args['port']}:${args['port']}`)

    if (['start', 'serve'].includes(actualCmd)) {
      siteOptions.push('--host', '0.0.0.0')
      siteOptions.push('--port', args['port'])
    }
  }

  const dockerVolumnes = [] as any[]
  if (volumes) {
    dockerVolumnes.push(...volumes)
  }
  dockerVolumnes.push(createOutputMount('site', args['output']))
  if (actualCmd === 'build') {
    siteOptions.push(
      '--out-dir',
      `/workspace/.dinghy/site/output/${args['site-build-dir']}`,
    )
  } else if (actualCmd === 'serve') {
    siteOptions.push(
      '--dir',
      `/workspace/.dinghy/site/output/${args['site-build-dir']}`,
    )
  }
  for await (const f of Deno.readDir(siteDir)) {
    if (
      f.isDirectory &&
      !['output', 'node_modules'].includes(f.name)
    ) {
      dockerVolumnes.push({
        source: `${siteDir}/${f.name}`,
        target: `/workspace/.dinghy/site/${f.name}`,
      })
    }
  }

  await runDockerCmd(
    '/workspace/.dinghy/site',
    dockerEnvs,
    dockerVolumnes,
    [...cmd, ...siteOptions, ...args.extraOptions],
    image,
    false,
    true,
    dockerArgs,
  )
  await onEvent(`site.${actualCmd}.finish`, args)
}
