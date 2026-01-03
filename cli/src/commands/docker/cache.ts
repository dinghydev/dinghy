import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../types.ts'
import chalk from 'chalk'
import { getTfImageTag, prepareOndemandImage } from './dockerBuildUtils.ts'
import { consumerImages } from './consumerImages.ts'

const options: CommandOptions = {
  string: ['include-images'],
  boolean: ['ignore-local-cache'],
  negatable: ['ignore-local-cache'],
  default: {
    'ignore-local-cache': true,
  },
  description: {
    'ignore-local-cache': 'Ignore local cache and force repopulate',
    'include-images':
      'Only include these images, comma separated list of image names. If not provided, all images will be cached.',
  },
  cmdAlias: ['populate-local-cache'],
  cmdDescription: 'Cache all related docker images locally',
}

function run(_context: CommandContext, args: CommandArgs) {
  for (const image of consumerImages()) {
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
    prepareOndemandImage(image.image, args['ignore-local-cache'])
    console.log(`Image ${chalk.green(image.image)} is ready`)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
