import Debug from 'debug'
import { DinghyError } from '../../types.ts'
import { configGetImage } from '../../utils/dockerConfig.ts'
import { hostAppHome } from '../../shared/home.ts'
import { execaSync } from 'execa'
import {
  customTfImage,
  tfContainsCustomization,
  tfVendorConfig,
} from './tfBuildUtils.ts'
import { createHash } from 'node:crypto'
import { dirname } from 'node:path'
const debug = Debug('init')

const ondemandImages: any = {
  tf: 'docker/images/50-tf',
}

export const md5Hash = (str: string) =>
  createHash('md5')
    .update(str)
    .digest('hex')

export const isOndemandImage = (name: string) =>
  ondemandImages[name] !== undefined

export function dockerCommand(args: string[], cwd?: string) {
  if (!cwd) {
    cwd = hostAppHome
  }
  debug('Executing: cd %s; docker %s', cwd, args.join(' '))
  execaSync({
    stderr: 'inherit',
    stdout: 'inherit',
    cwd,
  })`docker ${args}`
}

function isImageExistLocally(image: string) {
  const { success } = new Deno.Command('docker', {
    args: ['image', 'inspect', image],
    stdout: 'null',
    stderr: 'null',
  }).outputSync()
  debug('isImageExistLocally: %o', { image, success })
  return success
}

export function dockerPull(image: string, required = false) {
  const { success } = new Deno.Command('docker', {
    args: ['pull', image],
    stdout: 'inherit',
    stderr: 'null',
  }).outputSync()
  debug('isImagePulledRemotely: %o', { image, success })
  if (!success && required) {
    throw new DinghyError(`Failed to pull image ${image}`)
  }
  return success
}

export function dockerPush(image: string) {
  const { success } = new Deno.Command('docker', {
    args: ['push', image],
    stdout: 'inherit',
    stderr: 'null',
  }).outputSync()
  if (!success) {
    throw new DinghyError(`Failed to push image ${image}`)
  }
}

export function dockerTag(image: string, target: string) {
  const { success } = new Deno.Command('docker', {
    args: ['tag', image, target],
    stdout: 'inherit',
    stderr: 'null',
  }).outputSync()
  if (!success) {
    throw new DinghyError(`Failed to tag image ${image} as ${target}`)
  }
}

export function dockerManifestCreate(
  image: string,
  archImages: string[],
) {
  dockerCommand([
    'manifest',
    'create',
    image,
    ...archImages,
  ])
  dockerCommand(['manifest', 'push', image])
}

function createTempWorkingDir() {
  const workingDir = Deno.makeTempDirSync({
    dir: hostAppHome,
    prefix: '.tmp-dinghy-docker-build-',
  })
  debug('Created temp working directory %s ...', workingDir)
  return workingDir
}

function extractDockerSourceFile(
  workingDir: string,
  sourceFile: string,
  targetFile: string,
) {
  const targetFilePath = `${workingDir}/${targetFile}`
  const targetFileBaseDir = dirname(targetFilePath)
  Deno.mkdirSync(targetFileBaseDir, { recursive: true })
  dockerCommand(
    [
      'run',
      '--user',
      `${execaSync`id -u`.stdout}:${execaSync`id -g`.stdout}`,
      '-v',
      `${workingDir}:/output`,
      '--rm',
      '--entrypoint',
      'cp',
      configGetImage('tf-base'),
      '--no-preserve=ownership',
      sourceFile,
      `/output/${targetFile}`,
    ],
    hostAppHome,
  )

  debug('Extracted docker source file %s', targetFilePath)
}

export function buildOndemandImage(image: string, buildArch?: string) {
  if (!buildArch) {
    buildArch = Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'
  }
  const imageName = image.split(':')[1].split('-')[0]
  const imageFolder = ondemandImages[imageName]
  if (!imageFolder) {
    throw new Error(`Image ${image} not found`)
  }

  const workingDir = createTempWorkingDir()
  if (imageName === 'tf') {
    extractDockerSourceFile(
      workingDir,
      '/terraform/providers.tf.json',
      'fs-root/terraform/providers.tf.json',
    )
    extractDockerSourceFile(
      workingDir,
      '/terraform/versions.json',
      'versions.json',
    )
    customTfImage(workingDir)
  }
  console.log(`Building ondemand docker image ${image}...`)
  execaSync({
    stderr: 'inherit',
    stdout: 'inherit',
    cwd: workingDir,
  })`docker buildx build --provenance false --platform linux/${buildArch} --build-arg BUILD_ARCH=${buildArch} -t ${image} -f ${workingDir}/Dockerfile .`
  debug('Removing temporary folder %s ...', workingDir)
  Deno.removeSync(workingDir, { recursive: true })
}

export function prepareOndemandImage(
  image: string,
  useLocalCache = false,
) {
  if (useLocalCache && isImageExistLocally(image)) {
    return
  }
  if (dockerPull(image)) {
    return
  }

  buildOndemandImage(image)
}

let tfImage: string | undefined
export function getTfImageTag() {
  const tfBaseImage = configGetImage('tf')
  if (tfContainsCustomization()) {
    const tfConfig = tfVendorConfig()
    debug('parsed tfConfig %O', tfConfig)
    return `${tfBaseImage}-${md5Hash(JSON.stringify(tfConfig))}`
  } else {
    return tfBaseImage
  }
}
export function prepareTfImage(useLocalCache = true) {
  if (!tfImage) {
    tfImage = getTfImageTag()
    prepareOndemandImage(tfImage, useLocalCache)
  }
  return tfImage!
}

export const supportedArchs =
  Deno.env.get('DINGHYT_DOCKER_SUPPORTED_ARCHS')?.split(',') ||
  ['arm64', 'amd64']

export const multiArch =
  Deno.env.get('DINGHYT_DOCKER_SUPPORTED_ARCHS') !== 'false'
