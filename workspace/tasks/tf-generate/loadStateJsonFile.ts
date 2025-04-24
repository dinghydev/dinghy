import { existsSync } from '@std/fs/exists'
import chalk from 'chalk'
import { hostAppHome } from '../../utils/loadConfig.ts'

export function loadStateJsonFile(args: any) {
  const stateJsonFile = args['state-file']
  const filePath = stateJsonFile.startsWith('/')
    ? stateJsonFile
    : `${hostAppHome}/${stateJsonFile}`
  if (!existsSync(filePath)) {
    console.error(chalk.red(`State file ${filePath} not found`))
    Deno.exit(1)
  }

  const stateJson = JSON.parse(Deno.readTextFileSync(filePath))
  const { resources } = stateJson
  if (!resources) {
    console.error(chalk.red(`No resources found in the state file ${filePath}`))
    Deno.exit(1)
  }
  return resources
}
