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
  boolean: ['ignore-local-cache'],
  negatable: ['ignore-local-cache'],
  default: {
    'ignore-local-cache': true,
  },
  description: {
    'ignore-local-cache': 'Ignore local cache and force repopulate',
  },
  cmdAlias: ['populate-local-cache'],
  cmdDescription: 'Cache all related docker images locally',
}

function run(_context: CommandContext, args: CommandArgs) {
  for (let image of consumerImages()) {
    console.log(`Preparing image ${chalk.grey(image)}...`)
    if (image.includes(':tf-')) {
      image = getTfImageTag()
    }
    prepareOndemandImage(image, args['ignore-local-cache'])
    console.log(`Image ${chalk.green(image)} is ready`)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
