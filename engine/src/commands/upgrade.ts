import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '@dinghy/cli'
import {
  fetchLatestVersion,
  OPTIONS_SYMBOL,
  dinghyConfigFile,
  RUN_SYMBOL,
} from '@dinghy/cli'
import chalk from 'chalk'
import * as yaml from '@std/yaml'
import { existsSync } from '@std/fs/exists'

const options: CommandOptions = {
  string: ['version'],
  description: {
    version: 'The version to upgrade to',
  },
  alias: {
    v: 'version',
  },
  default: {
    version: 'latest',
  },
  cmdDescription:
    'Upgrade/lock project Dinghy version, to the latest version by default',
  cmdAlias: ['up'],
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  let version = args.version
  if (!version.includes('-')) {
    const latestVersion = await fetchLatestVersion()
    version = latestVersion[version]
    if (!version) {
      throw new Error(`Unknown version ${args.version}`)
    }
  }

  const config: any = existsSync(dinghyConfigFile)
    ? yaml.parse(Deno.readTextFileSync(dinghyConfigFile))
    : {}
  const currentVersion = config.dinghy?.engine?.version
  if (currentVersion !== version) {
    config.dinghy ??= {}
    config.dinghy.engine ??= {}
    config.dinghy.engine.version = version
    Deno.writeTextFileSync(dinghyConfigFile, yaml.stringify(config))
    console.log(
      `Upgraded from ${chalk.red(currentVersion)} to version ${
        chalk.green(version)
      }`,
    )
  } else {
    console.log(`Already at version ${chalk.red(chalk.green(version))}`)
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
