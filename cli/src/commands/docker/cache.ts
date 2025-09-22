import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../types.ts'
import {
  configGetDrawioImage,
  configGetEngineImage,
  configGetSiteImage,
  configGetTfImage,
} from '../../utils/dockerConfig.ts'
import chalk from 'chalk'
import { prepareOndemandImage } from './dockerBuildUtils.ts'

const options: CommandOptions = {
  description: {},
  cmdAlias: ['populate-local-cache'],
  hidden: true, // primarily for internal use for custom private registries
  cmdDescription:
    'Cache all related docker images locally so they can be used offline',
}

async function run(_context: CommandContext, _args: CommandArgs) {
  const images = [
    configGetEngineImage(),
    configGetDrawioImage(),
    configGetSiteImage(),
    configGetTfImage(),
  ]
  for (const image of images) {
    prepareOndemandImage(image)
    console.log(`Image ${chalk.green(image)} is ready`)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
