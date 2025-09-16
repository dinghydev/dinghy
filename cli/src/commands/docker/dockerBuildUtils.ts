import Debug from 'debug'
import { DinghyError } from '../../types.ts'
import { configGetEngineImage } from '../../utils/dockerConfig.ts'
import { hostAppHome } from '../../utils/loadConfig.ts'
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

function extractDockerSourceFiles() {
  const workingDir = Deno.makeTempDirSync({
    dir: hostAppHome,
    prefix: '.tmp-dinghy-docker-build-',
  })
  debug('Extracting docker source files to %s ...', workingDir)

  dockerCommand(
    [
      'run',
      '-v',
      `${workingDir}:/output`,
      '--rm',
      '--entrypoint',
      'cp',
      configGetEngineImage(),
      '-r',
      '/dinghy/docker',
      '/output/docker',
    ],
    hostAppHome,
  )

  return workingDir
}

export function buildOndemandImage(image: string, buildArch?: string) {
  if (!buildArch) {
    buildArch = Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'
  }
  const imageFolder = ondemandImages[image.split(':')[1].split('-')[0]]
  if (!imageFolder) {
    throw new Error(`Image ${image} not found`)
  }

  const workingDir = extractDockerSourceFiles()
  console.log(`Building ondemand docker image ${image}...`)
  execaSync({
    stderr: 'inherit',
    stdout: 'inherit',
    cwd: workingDir,
  })`docker buildx build --provenance false --platform linux/${buildArch} --build-arg BUILD_ARCH=${buildArch} -t ${image} -f ${imageFolder}/Dockerfile .`
  debug('Removing temporary folder %s ...', workingDir)
  Deno.removeSync(workingDir, { recursive: true })
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
