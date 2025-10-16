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
import { resolve } from 'node:path'
import Debug from 'debug'
const debug = Debug('runDocusaurusCmd')

const resolveSiteDir = async (args: CommandArgs) => {
  let siteDir = args['site-dir']
  if (!siteDir) {
    if (args.site) {
      if (dinghyAppConfig.sites?.[args.site]) {
        siteDir = dinghyAppConfig.sites[args.site].dir || `sites/${args.site}`
      } else {
        siteDir = `sites/${args.site}`
      }
    } else {
      if (dinghyAppConfig.sites) {
        const site = Object.keys(dinghyAppConfig.sites)[0]
        siteDir = dinghyAppConfig.sites[site].dir || `sites/${site}`
      } else if (existsSync(`${hostAppHome}/site`)) {
        siteDir = `${hostAppHome}/site`
      } else if (existsSync(`${hostAppHome}/sites`)) {
        for await (const f of Deno.readDir(`${hostAppHome}/sites`)) {
          if (!siteDir && f.isDirectory) {
            siteDir = `${hostAppHome}/sites/${f.name}`
          }
        }
      } else {
        siteDir = hostAppHome
      }
    }
  }
  if (!siteDir.startsWith('/')) {
    siteDir = `${hostAppHome}/${siteDir}`
  }
  if (!existsSync(siteDir)) {
    throw new DinghyError(`Site dir ${siteDir} not exists`)
  }
  debug('Resolved site dir %s', siteDir)
  return siteDir
}

const resolveOutputDir = async (args: CommandArgs) => {
  let outputDir = args['site-output']
  if (!outputDir) {
    if (args.site) {
      if (dinghyAppConfig.sites?.[args.site]) {
        outputDir = dinghyAppConfig.sites[args.site].output ||
          `${args.output}/sites/${args.site}`
      } else {
        outputDir = `${args.output}/sites/${args.site}`
      }
    } else {
      if (dinghyAppConfig.sites) {
        const site = Object.keys(dinghyAppConfig.sites)[0]
        outputDir = dinghyAppConfig.sites[site].output ||
          `${args.output}/sites/${site}`
      } else if (existsSync(`${hostAppHome}/site`)) {
        outputDir = `${args.output}/site`
      } else if (existsSync(`${hostAppHome}/sites`)) {
        for await (const f of Deno.readDir(`${hostAppHome}/sites`)) {
          if (!outputDir && f.isDirectory) {
            outputDir = `${args.output}/sites/${f.name}`
          }
        }
      } else {
        outputDir = `${args.output}/site`
      }
    }
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
  }
}

export const runDocusaurusCmd = async (
  context: CommandContext,
  args: CommandArgs,
  cmd: string[],
) => {
  const siteDir = await resolveSiteDir(args)
  const outputDir = await resolveOutputDir(args)
  const siteConfig = await resolveSiteConfig(siteDir)

  const dockerEnvs = {} as Record<string, string>
  if (siteConfig) {
    const { dinghySite, ...restSiteConfig } = siteConfig
    if (dinghySite?.deploy?.s3Url && cmd[1] === 'deploy') {
      return await deployToS3(context, args, outputDir, siteConfig)
    }

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
  for (const name of args['site-mapping']) {
    let source = `${siteDir}/${name}`
    if (!existsSync(source)) {
      source = resolve(`${siteDir}/../${name}`)
      if (!existsSync(source)) {
        continue
      }
    }
    dockerVolumnes.push({
      source,
      target: `/opt/docusaurus/${name}`,
    })
  }
  const siteSrcExists = existsSync(`${siteDir}/src`)
  for await (const f of Deno.readDir(siteDir)) {
    let name = f.name
    if (
      ['docusaurus.config.yaml', 'output', 'build'].includes(name) ||
      args['site-mapping'].includes(name)
    ) {
      continue
    }
    if (
      ['pages', 'docs', 'blog'].includes(name) && !siteSrcExists
    ) {
      name = `src/${name}`
    }
    dockerVolumnes.push({
      source: `${siteDir}/${f.name}`,
      target: `/opt/docusaurus/${name}`,
    })
  }
  for (const volumns of args['docker-volumes'] || []) {
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
