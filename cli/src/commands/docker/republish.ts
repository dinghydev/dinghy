import chalk from 'chalk'
import {
  dockerManifestCreate,
  dockerPush,
  dockerTag,
  md5Hash,
  multiArch,
  supportedArchs,
} from '../../services/docker/dockerBuildUtils.ts'
import { configGetOriginalImage } from '../../utils/dockerConfig.ts'
import { Args } from '@std/cli/parse-args'
import { CmdInput } from '../../services/cli/types.ts'
import { imageCustomization } from '../../services/config/imageConfig.ts'
import { configLoadEngineVersions } from '../../services/config/configLoadEngineVersions.ts'
import { projectVersions } from '../../utils/projectVersions.ts'
import { imagePull } from '../../services/docker/imageStatusUtil.ts'
import { buildCustomizedImage } from '../../services/docker/buildCustomizedImage.ts'

export const schema: CmdInput = {
  description:
    'Republish all related docker images from official registry to target docker registry.',
  options: [
    {
      name: 'target-repo',
      description: 'Target docker registry to republish images to.',
      env: 'DINGHY_ENGINE_REPO',
      required: true,
    },
    {
      name: 'push',
      description:
        'Push the images to the target registry, otherwise the image will only be built and can be used locally.',
      boolean: true,
      negatable: true,
      default: true,
    },
  ],
}

export async function run(args: Args) {
  const targetRepo = args['target-repo']
  const push = args['push']
  const localBuildArch = Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'

  const handleOriginalImage = async (image: string, targetTag: string) => {
    if (await imagePull(targetTag)) {
      console.log(`Image ${chalk.grey(image)} was already published`)
      return
    }

    if (multiArch) {
      const targetArchTags: string[] = []
      for (const arch of supportedArchs) {
        const srcArchTag = `${image}-linux-${arch}`
        const targetArchTag = `${targetTag}-linux-${arch}`
        await imagePull(srcArchTag, true)
        await dockerTag(srcArchTag, targetArchTag)
        if (push) {
          await dockerPush(targetArchTag)
        } else {
          console.log(`Skip pushing image ${chalk.grey(targetArchTag)}`)
        }
        targetArchTags.push(targetArchTag)
      }
      if (push) {
        await dockerManifestCreate(targetTag, targetArchTags)
      } else {
        const srcArchTag = `${targetTag}-linux-${localBuildArch}`
        await dockerTag(srcArchTag, targetTag)
        console.log(`Skip pushing manifest image ${chalk.grey(targetTag)}`)
      }
    } else {
      await imagePull(image, true)
      await dockerTag(image, targetTag)
      if (push) {
        await dockerPush(targetTag)
      } else {
        console.log(`Skip pushing image ${chalk.grey(targetTag)}`)
      }
    }
    console.log(`Republished image ${chalk.green(targetTag)}`)
  }

  const publishCustomizedImage = async (name: string, baseImage: string) => {
    const customization = imageCustomization(name)
    if (!customization) {
      return
    }
    const targetTag = `${baseImage}-${md5Hash(JSON.stringify(customization))}`
    console.log(`Build customized image ${chalk.grey(targetTag)}...`)
    if (await imagePull(targetTag)) {
      console.log(`Image ${chalk.grey(targetTag)} was already published`)
      return
    }
    if (name === 'tf') {
      baseImage = configGetOriginalImage('tf-base')
    }

    if (multiArch) {
      const targetArchTags: string[] = []
      for (const arch of supportedArchs) {
        const targetArchTag = `${targetTag}-linux-${arch}`
        await buildCustomizedImage(
          targetArchTag,
          baseImage,
          customization,
          arch,
        )
        if (push) {
          await dockerPush(targetArchTag)
        } else {
          console.log(`Skip pushing image ${chalk.grey(targetArchTag)}`)
        }
        targetArchTags.push(targetArchTag)
      }
      if (push) {
        await dockerManifestCreate(targetTag, targetArchTags)
      } else {
        const srcArchTag = `${targetTag}-linux-${localBuildArch}`
        await dockerTag(srcArchTag, targetTag)
        console.log(`Skip pushing manifest image ${chalk.grey(targetTag)}`)
      }
    } else {
      await buildCustomizedImage(
        targetTag,
        baseImage,
        customization,
        localBuildArch,
      )
      if (push) {
        await dockerPush(targetTag)
      } else {
        console.log(`Skip pushing image ${chalk.grey(targetTag)}`)
      }
    }
    console.log(`Published customized image ${chalk.green(targetTag)}`)
  }

  await configLoadEngineVersions()
  for (const name of Object.keys(projectVersions()).reverse()) {
    if (['release', 'base'].includes(name) || name.includes('engine-')) {
      continue
    }

    const image = configGetOriginalImage(name)
    console.log(`Republishing image ${chalk.grey(image)}...`)

    const targetTag = `${targetRepo}:${image.split(':')[1]}`
    await handleOriginalImage(image, targetTag)
    await publishCustomizedImage(name, targetTag)
  }
}
