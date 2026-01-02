import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../../types.ts'
import { DinghyError, OPTIONS_SYMBOL, RUN_SYMBOL } from '../../types.ts'
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

const debug = Debug('docker:republish')
const options: CommandOptions = {
  boolean: ['push'],
  string: ['target-repo', 'image-name'],
  negatable: ['push'],
  default: {
    push: true,
  },
  description: {
    'push':
      'Push the images to the target registry, otherwise the image will only be built and can be used locally',
    'target-repo':
      'Target docker registry to republish images to. If not provided, the target registry will be read from the Dinghy Config file as `engine.repo`.',
    'image-name':
      'Name of the image to republish. If not provided, all images will be republished.',
  },
  cmdDescription:
    `Republish all related docker images from official registry to target docker registry.`,
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

function run(_context: CommandContext, args: CommandArgs) {
  const images = consumerImages()

  const targetRepo = args['target-repo'] || configGetEngineRepo()
  if (targetRepo === configEngineRepoDefault) {
    throw new DinghyError(
      `Target registry is not provided, please provide --target-repo or set it in Dinghy Config file`,
    )
  }
  for (let image of images) {
    if (image.includes(':tf-')) {
      image = getTfImageTag()
    }
    const name = image.split(':')[1].split('-')[0]
    if (args['image-name'] && name !== args['image-name']) {
      continue
    }
    const ondemand = isOndemandImage(name)
    const targetTag = `${targetRepo}:${image.split(':')[1]}`
    if (dockerPull(targetTag)) {
      console.log(`Image ${chalk.grey(image)} is already published`)
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
        rebuildOrTagImage(name, srcArchTag, targetArchTag, arch)
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
        buildOndemandImage(image)
      } else {
        dockerPull(image, true)
      }
      rebuildOrTagImage(name, image, targetTag)
      if (args['push']) {
        dockerPush(targetTag)
      } else {
        console.log(`Skip pushing image ${chalk.grey(targetTag)}`)
      }
    }
    console.log(`Republished image ${chalk.green(targetTag)}`)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
