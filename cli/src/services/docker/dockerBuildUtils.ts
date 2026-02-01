import { createHash } from 'node:crypto'
import { cmdInherit } from '../../utils/cmd.ts'

export const md5Hash = (str: string) =>
  createHash('md5')
    .update(str)
    .digest('hex')

export async function dockerPush(image: string) {
  await cmdInherit(['docker', 'push', image], true)
}

export async function dockerTag(image: string, target: string) {
  await cmdInherit(['docker', 'tag', image, target], true)
}

export async function dockerManifestCreate(
  image: string,
  archImages: string[],
) {
  await cmdInherit([
    'docker',
    'manifest',
    'create',
    image,
    ...archImages,
  ], true)
  await cmdInherit(['docker', 'manifest', 'push', image], true)
}

export function buildOndemandImage(_image: string, _buildArch?: string) {
  throw new Error('Not implemented')
}

export const supportedArchs =
  Deno.env.get('DINGHYT_DOCKER_SUPPORTED_ARCHS')?.split(',') ||
  ['arm64', 'amd64']

export const multiArch =
  Deno.env.get('DINGHYT_DOCKER_SUPPORTED_ARCHS') !== 'false'
