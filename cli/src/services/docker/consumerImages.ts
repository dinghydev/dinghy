import { configGetImage } from '../../utils/dockerConfig.ts'
import { projectVersions } from '../../utils/projectVersions.ts'

export function consumerImages() {
  const images: { name: string; image: string }[] = []
  Object.keys(projectVersions()).map((name: string) => {
    if (name === 'base' || name.includes('-')) {
      return
    }
    images.push({ name, image: configGetImage(name) })
  })
  return images
}
