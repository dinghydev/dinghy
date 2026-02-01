import Debug from 'debug'
import { configGetEngineRepo } from '../../utils/dockerConfig.ts'
import { imageCustomization } from './imageConfig.ts'
import { md5Hash } from '../docker/dockerBuildUtils.ts'
import { buildCustomizedImage } from '../docker/buildCustomizedImage.ts'
import { projectVersions } from '../../utils/projectVersions.ts'
const debug = Debug('dockerConfig')

const images: Record<string, string> = {}

export const configGetToolImage = async (name: string): Promise<string> => {
  if (images[name]) {
    return images[name]
  }
  let image = `${configGetEngineRepo()}:${projectVersions()[name]}`
  const customization = imageCustomization(name)
  if (customization) {
    const baseImage = name === 'tf'
      ? `${configGetEngineRepo()}:${projectVersions()['tf-base']}`
      : image
    image = `${image}-${md5Hash(JSON.stringify(customization))}`
    await buildCustomizedImage(image, baseImage, customization)
  }
  images[name] = image
  debug('resolved %s image %s', name, image)
  return image!
}
