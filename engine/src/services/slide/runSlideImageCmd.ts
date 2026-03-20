import {
  configGetToolImage,
  deepMerge,
  dinghyAppConfig,
  hostAppHome,
  runDockerCmd,
} from '@dinghy/cli'
import { existsSync } from 'node:fs'
import * as yaml from '@std/yaml'
import path from 'node:path'
import Debug from 'debug'
import { onEvent } from '@dinghy/base-components'
import { Args } from '@std/cli/parse-args'
const debug = Debug('runSlideImageCmd')

export const resolveSlideDir = (args: Args) => {
  let slideDir = args['slide-slides-dir']
  if (!slideDir.startsWith('/')) {
    slideDir = `${hostAppHome}/${slideDir}`
  }
  debug('Resolved slide dir %s', slideDir)
  return slideDir
}

export const resolveOutputDir = (args: Args) => {
  let outputDir = args['output']
  if (!outputDir.startsWith('/')) {
    outputDir = `${hostAppHome}/${outputDir}`
  }
  if (!existsSync(outputDir)) {
    Deno.mkdirSync(outputDir, { recursive: true })
  }
  debug('Resolved slide output dir %s', outputDir)
  return outputDir
}

export const resolveSlideConfig = (slideDir: string): any => {
  const configFiles = [
    `${slideDir}/slides.yml`,
  ]
  const configs: any[] = []
  if (dinghyAppConfig.slides) {
    configs.push(dinghyAppConfig.slides)
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

export const resolveSlideConfigJson = (slideConfig: any, target: any) => {
  const { volumes: _volumes, deploy: _deploy, ...restSlideConfig } = slideConfig
  if (Object.keys(restSlideConfig).length > 0) {
    target['SLIDE_CONFIG_JSON'] = JSON.stringify(restSlideConfig)
  }
}

export const runSlideImageCmd = async (
  args: Args,
  cmd: string[],
) => {
  const actualCmd = cmd.slice(-1)[0]
  await onEvent(`slide.${actualCmd}.start`, args)
  const slideDir = await resolveSlideDir(args)
  const outputDir = await resolveOutputDir(args)
  const slideConfig = await resolveSlideConfig(slideDir)

  const dockerEnvs = {} as Record<string, string>
  const { volumes } = slideConfig
  resolveSlideConfigJson(slideConfig, dockerEnvs)
  const image = await configGetToolImage('slide')
  const slideOptions = []
  const dockerArgs: string[] = args['slide-docker-options'] || []
  if (args['port']) {
    dockerArgs.push('-p', `${args['port']}:${args['port']}`)

    if (['start', 'serve'].includes(actualCmd)) {
      slideOptions.push('--host', '0.0.0.0')
      slideOptions.push('--port', args['port'])
    }
  }

  const dockerVolumnes = [] as any[]
  if (existsSync(slideDir)) {
    dockerVolumnes.push({
      source: `${slideDir}`,
      target: `/workspace/.dinghy/slide/slides`,
    })
  }
  dockerVolumnes.push({
    source: outputDir,
    target: `/workspace/.dinghy/slide/output`,
  })
  dockerEnvs['DINGHY_SLIDE_OUTPUT_DEV_DIR'] = args['slide-output-dev']
  dockerEnvs['DINGHY_SLIDE_OUTPUT_BUILD_DIR'] = args['slide-output-build']
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
          : path.resolve(`${slideDir}/${source}`) // check source path valid
        dockerVolumnes.push({
          source: resolvedSource,
          target: `/workspace/.dinghy/slide/${target}`,
        })
      }
    }
  }

  await runDockerCmd(
    '/workspace/.dinghy/slide',
    dockerEnvs,
    dockerVolumnes,
    [...cmd, ...slideOptions, ...args.extraOptions],
    image,
    false,
    true,
    dockerArgs,
  )
  await onEvent(`slide.${actualCmd}.finish`, args)
}
