import {
  type CommandArgs,
  CommandContext,
  configGetSiteImage,
  deepMerge,
  dinghyAppConfig,
  DinghyError,
  hostAppHome,
  runDockerCmd,
} from '@dinghy/cli'
import { existsSync } from 'node:fs'
import * as yaml from '@std/yaml'

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
  return outputDir
}

const resolveSiteConfig = async (siteDir: string) => {
  const configFiles = [
    `${siteDir}/../docusaurus.config.yaml`,
    `${siteDir}/docusaurus.config.yaml`,
  ]
  const configs = []
  for (const file of configFiles) {
    if (existsSync(file)) {
      configs.push(yaml.parse(Deno.readTextFileSync(file)))
    }
  }
  if (configs.length === 1) {
    return configs[0]
  } else if (configs.length > 1) {
    const result = {}
    for (const c of configs) {
      deepMerge(result, c)
    }
    return result
  }
}

export const runDocusaurusCmd = async (
  _context: CommandContext,
  args: CommandArgs,
  cmd: string[],
) => {
  const siteDir = await resolveSiteDir(args)
  const outputDir = await resolveOutputDir(args)
  const siteConfig = await resolveSiteConfig(siteDir)
  const image = configGetSiteImage()
  const siteArgs = args['site-args'] ? args['site-args'].split(' ') : []
  const dockerArgs = args['docker-args'] ? args['docker-args'].split(' ') : []
  if (args['port']) {
    dockerArgs.push('-p', `${args['port']}:${args['port']}`)

    if (cmd.includes('start') || cmd.includes('serve')) {
      siteArgs.push('--host', '0.0.0.0')
    }
  }

  const dockerEnvs = {} as Record<string, string>
  if (siteConfig) {
    dockerEnvs['SITE_CONFIG_JSON'] = JSON.stringify(siteConfig)
  }

  const dockerVolumnes = [] as any[]
  for await (const f of Deno.readDir(siteDir)) {
    dockerVolumnes.push({
      source: `${siteDir}/${f.name}`,
      target: `/opt/docusaurus/${f.name}`,
    })
  }

  dockerVolumnes.push({
    source: `${outputDir}`,
    target: `/opt/docusaurus/build`,
  })

  return await runDockerCmd(
    '/opt/docusaurus',
    dockerEnvs,
    dockerVolumnes,
    [...cmd, ...siteArgs],
    image,
    true,
    dockerArgs,
  )
}
