import { existsSync } from '@std/fs/exists'
import chalk from 'chalk'

export function loadStateJsonFile(args: any) {
  const stateJsonFile = args['state-json-file']
  if (!existsSync(stateJsonFile)) {
    console.error(chalk.red('State json file not found'))
    Deno.exit(1)
  }

  const stateJson = JSON.parse(Deno.readTextFileSync(stateJsonFile))
  const resources = stateJson.values?.root_module?.resources
  if (!resources) {
    console.error(chalk.red('No resources found in the state json file'))
    Deno.exit(1)
  }
  return resources
}
