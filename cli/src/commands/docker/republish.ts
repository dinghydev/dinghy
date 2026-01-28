import { DinghyError } from '../../types.ts'
import { dinghyAppConfig } from '../../utils/loadConfig.ts'
import chalk from 'chalk'
import {
  buildOndemandImage,
  dockerManifestCreate,
  dockerPull,
  dockerPush,
  dockerTag,
  getTfImageTag,
  isOndemandImage,
  multiArch,
  supportedArchs,
} from './dockerBuildUtils.ts'
import { consumerImages } from './consumerImages.ts'
import { hostAppHome } from '../../shared/home.ts'
import { existsSync } from '@std/fs/exists'
import Debug from 'debug'
import { execaSync } from 'execa'
import {
  configEngineRepoDefault,
  configGetEngineRepo,
} from '../../utils/dockerConfig.ts'
import { Args } from '@std/cli/parse-args'
import { CmdInput } from '../../services/cli/types.ts'

const debug = Debug('docker:republish')

export const schema: CmdInput = {
  description:
    'Republish all related docker images from official registry to target docker registry.',
  options: [
    {
      name: 'include-images',
      description:
        'Only include these images, comma separated list of image names. If not provided, all images will be cached.',
    },
    {
      name: 'target-repo',
      description:
        'Target docker registry to republish images to. If not provided, the target registry will be read from the Dinghy Config file as `engine.repo`.',
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
  args: [
    {
      name: 'image',
      description:
        'Name of the image to republish. If not provided, all images will be republished.',
    },
  ],
}

const rebuildOrTagImage = (
  name: string,
  source: string,
  target: string,
  buildArch?: string,
) => {
  if (!buildArch) {
    buildArch = Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'
  }
  const republishRuns = dinghyAppConfig.docker?.images?.[name]?.republishRuns
  const overrideFsRootDir =
    `.dinghy_file_override/docker/images/${name}/fs-root`
  const hasOverrideFsRoot = existsSync(`${hostAppHome}/${overrideFsRootDir}`)
  if (republishRuns || hasOverrideFsRoot) {
    const workingDir = Deno.makeTempDirSync({
      dir: hostAppHome,
      prefix: `.tmp-dinghy-docker-republish-${name}-${buildArch}`,
    })
    const dockerFile = `${workingDir}/Dockerfile`
    const dockerFileContent = [`FROM ${source}`]
    const dockerIgnoreContent = [`# Ignore everything\n**`]
    if (hasOverrideFsRoot) {
      dockerFileContent.push(`COPY ${overrideFsRootDir} /`)
      dockerIgnoreContent.push(
        `# Allow files and directories\n!/${overrideFsRootDir}/**\n`,
      )
    }
    Deno.writeTextFileSync(
      `${dockerFile}.dockerignore`,
      dockerIgnoreContent.join('\n'),
    )
    if (republishRuns) {
      republishRuns.map((cmd: string) => {
        dockerFileContent.push(`RUN ${cmd}`)
      })
    }
    Deno.writeTextFileSync(dockerFile, dockerFileContent.join('\n'))

    console.log(`Building docker image ${target}...`)
    execaSync({
      stderr: 'inherit',
      stdout: 'inherit',
    })`docker buildx build --provenance false --platform linux/${buildArch} --build-arg BUILD_ARCH=${buildArch} -t ${target} -f ${dockerFile} .`

    debug('Removing temporary folder %s ...', workingDir)
    Deno.removeSync(workingDir, { recursive: true })
  } else {
    dockerTag(source, target)
  }
}

export function run(args: Args) {
  const images = consumerImages()

  const targetRepo = args['target-repo'] || configGetEngineRepo()
  if (targetRepo === configEngineRepoDefault) {
    throw new DinghyError(
      `Target registry is not provided, please provide --target-repo or set it in Dinghy Config file`,
    )
  }
  for (const image of images) {
    if (image.name === 'tf') {
      image.image = getTfImageTag()
    }
    if (args['image'] && image.name !== args['image']) {
      continue
    }
    const ondemand = isOndemandImage(image.name)
    const targetTag = `${targetRepo}:${image.image.split(':')[1]}`
    if (dockerPull(targetTag)) {
      console.log(`Image ${chalk.grey(image.image)} is already published`)
      continue
    }
    if (multiArch) {
      const targetArchTags: string[] = []
      for (const arch of supportedArchs) {
        const srcArchTag = `${image}-linux-${arch}`
        const targetArchTag = `${targetTag}-linux-${arch}`
        if (ondemand) {
          buildOndemandImage(srcArchTag, arch)
        } else {
          dockerPull(srcArchTag, true)
        }
        rebuildOrTagImage(image.name, srcArchTag, targetArchTag, arch)
        if (args['push']) {
          dockerPush(targetArchTag)
        } else {
          console.log(`Skip pushing image ${chalk.grey(targetArchTag)}`)
        }
        targetArchTags.push(targetArchTag)
      }
      if (args['push']) {
        dockerManifestCreate(targetTag, targetArchTags)
      } else {
        const buildArch = Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'
        const srcArchTag = `${image}-linux-${buildArch}`
        dockerTag(srcArchTag, targetTag)
        console.log(`Skip pushing manifest image ${chalk.grey(targetTag)}`)
      }
    } else {
      if (ondemand) {
        buildOndemandImage(image.image)
      } else {
        dockerPull(image.image, true)
      }
      rebuildOrTagImage(image.name, image.image, targetTag)
      if (args['push']) {
        dockerPush(targetTag)
      } else {
        console.log(`Skip pushing image ${chalk.grey(targetTag)}`)
      }
    }
    console.log(`Republished image ${chalk.green(targetTag)}`)
  }
}
