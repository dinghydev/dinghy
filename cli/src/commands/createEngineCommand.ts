import chalk from 'chalk'
import { existsSync } from '@std/fs/exists'
import type { CommandArgs, CommandContext, Commands } from '../types.ts'
import { OPTIONS_SYMBOL, REQUIRE_ENGINE_SYMBOL, RUN_SYMBOL } from '../types.ts'
import {
  configGetEngineImage,
  configIsEngineRepoDefault,
} from '../utils/index.ts'
import { runEngineCommand } from '../utils/runEngineCommand.ts'
import cache from './docker/cache.ts'
import { dinghyHome } from '../shared/home.ts'
const populateCacheIfNeeded = async (
  context: CommandContext,
  args: CommandArgs,
) => {
  if (
    !configIsEngineRepoDefault()
  ) {
    const cacheMarkerFile = `${dinghyHome}/states/marker-cache-populated-${
      configGetEngineImage().replace(/\W/g, '')
    }`
    if (!existsSync(cacheMarkerFile)) {
      console.log(
        'Populating docker image cache to from custom registry to avoid permission issues later ...',
      )
      await cache[RUN_SYMBOL](context, args)
      Deno.mkdirSync(`${dinghyHome}/states`, { recursive: true })
      Deno.writeTextFileSync(cacheMarkerFile, new Date().toISOString())
      console.log(chalk.green('Cache populated successfully'))
    }
  }
}

const run = async (context: CommandContext, args: CommandArgs) => {
  await populateCacheIfNeeded(context, args)
  await runEngineCommand(context)
}

export const createEngineCommand = (cmdDescription: string): Commands => {
  return {
    [OPTIONS_SYMBOL]: {
      description: {},
      cmdDescription,
    },
    [RUN_SYMBOL]: run,
    [REQUIRE_ENGINE_SYMBOL]: true,
  }
}
