import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '@dinghy/cli'
import {
  configGetDrawioImage,
  configGetTfImage,
  OPTIONS_SYMBOL,
  RUN_SYMBOL,
} from '@dinghy/cli'
import chalk from 'chalk'
import { prepareOndemandImage } from './dockerBuildUtils.ts'

const options: CommandOptions = {
  description: {},
  cmdAlias: ['cache'],
  cmdDescription:
    'Cache all related docker images locally so they can be used offline',
}

async function run(_context: CommandContext, _args: CommandArgs) {
  const images = [
    configGetDrawioImage(),
    configGetTfImage(),
  ]
  for (const image of images) {
    await prepareOndemandImage(image)
    console.log(`Image ${chalk.green(image)} is ready`)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
