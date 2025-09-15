import Debug from 'debug'
import { DinghyError, hostAppHome, projectRoot } from '@dinghy/cli'
import { execaSync } from 'execa'
const debug = Debug('init')

const ondemandImages = {
  tf: 'docker/images/50-tf',
}

export const isOndemandImage = (name: string) =>
  ondemandImages[name] !== undefined

export function dockerCommand(args: string[], cwd?: string) {
  if (!cwd) {
    cwd = hostAppHome
  }
  console.log(`Executing: cd ${cwd}; docker ${args.join(' ')}`)
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

export function buildOndemandImage(image: string, buildArch?: string) {
  if (!buildArch) {
    buildArch = Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'
  }
  const imageFolder = ondemandImages[image.split(':')[1].split('-')[0]]
  if (!imageFolder) {
    throw new Error(`Image ${image} not found`)
  }
  console.log(`Building ondemand docker image ${image}...`)
  execaSync({
    stderr: 'inherit',
    stdout: 'inherit',
    cwd: projectRoot,
  })`docker buildx build --platform linux/${buildArch} --build-arg BUILD_ARCH=${buildArch} -t ${image} -f ${imageFolder}/Dockerfile .`
}

export function prepareOndemandImage(image: string) {
  if (isImageExistLocally(image)) {
    return
  }
  if (dockerPull(image)) {
    return
  }

  buildOndemandImage(image)
}

export const supportedArchs =
  Deno.env['DINGHYT_DOCKER_SUPPORTED_ARCHS']?.split(',') || ['arm64', 'amd64']

export const multiArch = Deno.env['DINGHYT_DOCKER_SUPPORTED_ARCHS'] !== 'false'
