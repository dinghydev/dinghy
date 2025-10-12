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
  description: {},
  cmdAlias: ['populate-local-cache'],
  hidden: true, // primarily for internal use for custom private registries
  cmdDescription:
    'Cache all related docker images locally so they can be used offline',
}

function run(_context: CommandContext, _args: CommandArgs) {
  for (const image of consumerImages()) {
    prepareOndemandImage(image)
    console.log(`Image ${chalk.green(image)} is ready`)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
