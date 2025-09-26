import { configGetImage } from '../../utils/dockerConfig.ts'
import { projectVersions } from '../../utils/projectVersions.ts'

export function consumerImages(): string[] {
  const images: string[] = []
  Object.keys(projectVersions()).map((name: string) => {
    if (name === 'base' || name === 'release' || name.includes('-')) {
      return
    }
    images.push(configGetImage(name))
  })
  return images
}
