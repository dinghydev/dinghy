import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../../types.ts'
import { DinghyError, OPTIONS_SYMBOL, RUN_SYMBOL } from '../../types.ts'
import { configGetEngineImage } from '../../utils/dockerConfig.ts'
import { dinghyAppConfig } from '../../utils/loadConfig.ts'
import chalk from 'chalk'
import {
  buildOndemandImage,
  dockerManifestCreate,
  dockerPull,
  dockerPush,
  dockerTag,
  isOndemandImage,
  multiArch,
  supportedArchs,
} from './dockerBuildUtils.ts'
import { consumerImages } from './consumerImages.ts'

const options: CommandOptions = {
  string: ['target-repo'],
  description: {
    'target-repo': 'Target docker registry to clone images to',
  },
  cmdDescription:
    `Clone all related docker images from official registry to target docker registry`,
}

async function run(_context: CommandContext, args: CommandArgs) {
  const images = [
    ...consumerImages(),
    configGetEngineImage(),
  ]

  const targetRepo = args['target-repo'] || dinghyAppConfig.docker?.engine?.repo
  if (!targetRepo) {
    throw new DinghyError(
      `Target registry is not provided, please provide --target-repo or set it in Dinghy Config file`,
    )
  }
  for (const image of images) {
    const name = image.split(':')[1].split('-')[0]
    const ondemand = isOndemandImage(name)
    const targetTag = `${targetRepo}:${image.split(':')[1]}`
    if (multiArch) {
      const targetArchTags: string[] = []
      for (const arch of supportedArchs) {
        const targetArchTag = `${targetTag}-linux-${arch}`
        if (ondemand) {
          await buildOndemandImage(targetArchTag, arch)
        } else {
          const srcArchTag = `${image}-linux-${arch}`
          dockerPull(srcArchTag, true)
          dockerTag(srcArchTag, targetArchTag)
        }
        dockerPush(targetArchTag)
        targetArchTags.push(targetArchTag)
      }
      dockerManifestCreate(targetTag, targetArchTags)
    } else {
      if (ondemand) {
        await buildOndemandImage(targetTag)
      } else {
        dockerPull(image, true)
        dockerTag(image, targetTag)
      }
      dockerPush(targetTag)
    }
    console.log(`Image ${chalk.green(targetTag)} is ready`)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
