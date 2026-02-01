import chalk from 'chalk'
import { CmdInput } from '../../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'
import { configGetToolImage } from '../../services/config/configGetToolImage.ts'
import { configGetEngineImage } from '../../services/config/configGetEngineImage.ts'
import { configLoadEngineVersions } from '../../services/config/configLoadEngineVersions.ts'
import { projectVersions } from '../../utils/projectVersions.ts'
import { configGetOriginalImage } from '../../utils/dockerConfig.ts'

export const schema: CmdInput = {
  description: 'Cache all related docker images locally',
  options: [
    {
      name: 'include-images',
      description:
        'Only include these images, comma separated list of image names. If not provided, all images will be cached.',
    },
  ],
  alias: ['populate-local-cache'],
}

export async function run(args: Args) {
  await configLoadEngineVersions()
  const includeImages = args['include-images']
    ? args['include-images'].split(',').map((image: string) => image.trim())
    : undefined

  for (const name of Object.keys(projectVersions()).reverse()) {
    if (
      name !== 'engine' &&
      includeImages &&
      !includeImages.includes(name)
    ) {
      continue
    }
    if (name === 'release' || name === 'base' || name.includes('-')) {
      continue
    }
    let image = configGetOriginalImage(name)
    console.log(`Preparing image ${chalk.grey(image)}...`)
    if (name === 'engine') {
      image = await configGetEngineImage()
    } else {
      image = await configGetToolImage(name)
    }
    console.log(`Image ${chalk.green(image)} is ready`)
  }
}
