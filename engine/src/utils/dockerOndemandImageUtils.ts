import Debug from 'debug'
import { projectRoot } from './projectRoot.ts'
import { execaSync } from 'execa'
const debug = Debug('init')

const ondemandImages = {
  tf: 'docker/images/50-tf',
}

export const isOndemandImage = (name: string) =>
  ondemandImages[name] !== undefined

function isImageExistLocally(image: string) {
  const { success } = new Deno.Command('docker', {
    args: ['image', 'inspect', image],
    stdout: 'null',
    stderr: 'null',
  }).outputSync()
  debug('isImageExistLocally: %o', { image, success })
  return success
}

function isImagePulledRemotely(image: string) {
  const { success } = new Deno.Command('docker', {
    args: ['pull', image],
    stdout: 'inherit',
    stderr: 'null',
  }).outputSync()
  debug('isImagePulledRemotely: %o', { image, success })
  return success
}

function build(image: string) {
  const buildArch = Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'
  const imageFolder = ondemandImages[image.split(':')[1].split('-')[0]]
  console.log(`Building ondemand docker image ${image}...`)
  execaSync({
    stderr: 'inherit',
    stdout: 'inherit',
    cwd: projectRoot,
  })`docker buildx build --platform linux/${buildArch} --build-arg BUILD_ARCH=${buildArch} -t ${image} -f ${imageFolder}/Dockerfile .`
}

export async function prepareOndemandImage(image: string) {
  if (isImageExistLocally(image)) {
    return
  }
  if (isImagePulledRemotely(image)) {
    return
  }

  build(image)
}
