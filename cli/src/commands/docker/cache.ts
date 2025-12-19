import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../types.ts'
import chalk from 'chalk'
import { prepareOndemandImage } from './dockerBuildUtils.ts'
import { consumerImages } from './consumerImages.ts'

const options: CommandOptions = {
  boolean: ['ignore-local-cache'],
  negatable: ['ignore-local-cache'],
  default: {
    'ignore-local-cache': true,
  },
  description: {},
  cmdAlias: ['populate-local-cache'],
  hidden: true, // primarily for internal use for custom private registries
  cmdDescription:
    'Cache all related docker images locally so they can be used offline',
}

function run(_context: CommandContext, args: CommandArgs) {
  for (const image of consumerImages()) {
    console.log(`Preparing image ${chalk.grey(image)}...`)
    prepareOndemandImage(image, args['ignore-local-cache'])
    console.log(`Image ${chalk.green(image)} is ready`)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
