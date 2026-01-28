import chalk from 'chalk'
import { getTfImageTag, prepareOndemandImage } from './dockerBuildUtils.ts'
import { consumerImages } from './consumerImages.ts'
import { CmdInput } from '../../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description: 'Cache all related docker images locally',
  options: [
    {
      name: 'include-images',
      description:
        'Only include these images, comma separated list of image names. If not provided, all images will be cached.',
    },
    {
      name: 'use-local-cache',
      description:
        'Use local cache instead of repopulating for faster operation.',
      boolean: true,
    },
  ],
  alias: ['populate-local-cache'],
}

export function run(args: Args) {
  for (const image of consumerImages().reverse()) {
    if (
      args['include-images'] &&
      !args['include-images'].split(',').includes(image.name)
    ) {
      continue
    }
    console.log(`Preparing image ${chalk.grey(image.image)}...`)
    if (image.image.includes(':tf-')) {
      image.image = getTfImageTag()
    }
    prepareOndemandImage(image.image, args['use-local-cache'])
    console.log(`Image ${chalk.green(image.image)} is ready`)
  }
}
