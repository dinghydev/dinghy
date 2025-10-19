import {
  type CommandArgs,
  CommandContext,
  configGetImage,
  deepMerge,
  dinghyAppConfig,
  DinghyError,
  hostAppHome,
  runDockerCmd,
} from '@dinghy/cli'
import { existsSync } from 'node:fs'
import * as yaml from '@std/yaml'
import { deployToS3 } from './deployToS3.ts'
import path from 'node:path'
import Debug from 'debug'
const debug = Debug('runDocusaurusCmd')

const resolveSiteDir = (args: CommandArgs) => {
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

const resolveOutputDir = (siteDir: string, args: CommandArgs) => {
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
    `${siteDir}/../docusaurus.config.yaml`,
    `${siteDir}/docusaurus.config.yaml`,
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

export const runDocusaurusCmd = async (
  context: CommandContext,
  args: CommandArgs,
  cmd: string[],
) => {
  const siteDir = await resolveSiteDir(args)
  const outputDir = await resolveOutputDir(siteDir, args)
  const siteConfig = await resolveSiteConfig(siteDir)

  const dockerEnvs = {} as Record<string, string>
  const { site, ...restSiteConfig } = siteConfig
  if (site?.deploy?.s3Url && cmd[1] === 'deploy') {
    return await deployToS3(context, args, outputDir, siteConfig)
  }
  if (Object.keys(restSiteConfig).length > 0) {
    dockerEnvs['SITE_CONFIG_JSON'] = JSON.stringify(restSiteConfig)
  }
  const image = configGetImage('site')
  const siteArgs = args['site-args'] ? args['site-args'].split(' ') : []
  const dockerArgs = args['docker-args'] ? args['docker-args'].split(' ') : []
  if (args['port']) {
    dockerArgs.push('-p', `${args['port']}:${args['port']}`)

    if (['start', 'serve'].includes(cmd[1])) {
      siteArgs.push('--host', '0.0.0.0')
      siteArgs.push('--port', args['port'])
    }
  }

  const dockerVolumnes = [] as any[]
  for await (const f of Deno.readDir(siteDir)) {
    if (
      !['docusaurus.config.yaml', 'output', 'build'].includes(f.name)
    ) {
      dockerVolumnes.push({
        source: `${siteDir}/${f.name}`,
        target: `/opt/docusaurus/${f.name}`,
      })
    }
  }
  for (
    const volumns of [
      ...(args['docker-volumes'] || []),
      ...(site?.volumes || []),
    ]
  ) {
    for (const v of volumns.split(',')) {
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

  if (cmd[1] !== 'start') {
    dockerVolumnes.push({
      source: `${outputDir}`,
      target: `/opt/docusaurus/build`,
    })
  }

  return await runDockerCmd(
    '/opt/docusaurus',
    dockerEnvs,
    dockerVolumnes,
    [...cmd, ...siteArgs, ...args['--']],
    image,
    true,
    dockerArgs,
  )
}
