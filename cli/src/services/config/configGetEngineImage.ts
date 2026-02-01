import Debug from 'debug'
import {
  configGetEngineRepo,
  configGetEngineVersion,
} from '../../utils/dockerConfig.ts'
import { imageCustomization } from './imageConfig.ts'
import { md5Hash } from '../docker/dockerBuildUtils.ts'
import { buildCustomizedImage } from '../docker/buildCustomizedImage.ts'
const debug = Debug('dockerConfig')

let image: string | undefined

export const configGetEngineImage = async (): Promise<string> => {
  if (image) {
    return image
  }
  const baseImage =
    `${configGetEngineRepo()}:engine-${configGetEngineVersion()}`
  const customization = imageCustomization('engine')
  if (customization) {
    image = `${baseImage}-${md5Hash(JSON.stringify(customization))}`
    await buildCustomizedImage(image, baseImage, customization)
  } else {
    image = baseImage
  }
  debug('resolved engine image %s', image)
  return image!
}
