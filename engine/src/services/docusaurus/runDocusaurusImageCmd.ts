import {
  configGetToolImage,
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

const resolveSiteDir = (args: Args) => {
  let siteDir = args['site-dir'] || args.site || hostAppHome
  if (!siteDir.startsWith('/')) {
    siteDir = `${hostAppHome}/${siteDir}`
  }
  if (!existsSync(siteDir)) {
    throw new DinghyError(`Site dir ${siteDir} not exists`)
  }
  debug('Resolved site dir %s', siteDir)
  return siteDir
}

const resolveOutputDir = (siteDir: string, args: Args) => {
  let outputDir = args['site-output']
  if (!outputDir) {
    outputDir = `${siteDir}/output/site`
  }
  if (!outputDir.startsWith('/')) {
    outputDir = `${hostAppHome}/${outputDir}`
  }
  if (!existsSync(outputDir)) {
    Deno.mkdirSync(outputDir, { recursive: true })
  }
  debug('Resolved site output dir %s', outputDir)
  return outputDir
}

const resolveSiteConfig = (siteDir: string): any => {
  const configFiles = [
    `${siteDir}/../docusaurus.config.yml`,
    `${siteDir}/docusaurus.config.yml`,
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

export const runDocusaurusImageCmd = async (
  args: Args,
  cmd: string[],
) => {
  const actualCmd = cmd.slice(-1)[0]
  await onEvent(`site.${actualCmd}.start`, args)
  const siteDir = await resolveSiteDir(args)
  const outputDir = await resolveOutputDir(siteDir, args)
  const siteConfig = await resolveSiteConfig(siteDir)

  const dockerEnvs = {} as Record<string, string>
  const { volumes, deploy, ...restSiteConfig } = siteConfig
  if (deploy?.s3Url && actualCmd === 'deploy') {
    return await deployToS3(args, outputDir, siteConfig)
  }
  if (Object.keys(restSiteConfig).length > 0) {
    dockerEnvs['SITE_CONFIG_JSON'] = JSON.stringify(restSiteConfig)
  }
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
  const outputParentDir = path.dirname(outputDir)
  dockerVolumnes.push({
    source: outputParentDir,
    target: `/opt/docusaurus/${path.basename(outputParentDir)}`,
  })
  if (actualCmd === 'build') {
    siteOptions.push(
      '--out-dir',
      `${path.basename(outputParentDir)}/${path.basename(outputDir)}`,
    )
  } else if (actualCmd === 'serve') {
    siteOptions.push(
      '--dir',
      `${path.basename(outputParentDir)}/${path.basename(outputDir)}`,
    )
  }
  for await (const f of Deno.readDir(siteDir)) {
    if (
      !['docusaurus.config.yml', 'output', 'build'].includes(f.name)
    ) {
      dockerVolumnes.push({
        source: `${siteDir}/${f.name}`,
        target: `/opt/docusaurus/${f.name}`,
      })
    }
  }
  if (existsSync(`${siteDir}/config/site/sidebars.ts`)) {
    dockerVolumnes.push({
      source: `${siteDir}/config/site/sidebars.ts`,
      target: `/opt/docusaurus/sidebars.ts`,
    })
  }
  for (
    const vs of [
      ...(volumes || []),
    ]
  ) {
    for (const v of vs.split(',')) {
      const [source, target] = v.split(':')
      if (source && target) {
        const resolvedSource = source.startsWith('/')
          ? source
          : path.resolve(`${siteDir}/${source}`) // check source path valid
        dockerVolumnes.push({
          source: resolvedSource,
          target: `/opt/docusaurus/${target}`,
        })
      }
    }
  }

  if (actualCmd !== 'start') {
    dockerVolumnes.push({
      source: `${outputDir}`,
      target: `/opt/docusaurus/build`,
    })
  }

  await runDockerCmd(
    '/opt/docusaurus',
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
