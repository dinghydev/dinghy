import { existsSync } from '@std/fs/exists'
import { hostAppHome } from '../shared/home.ts'

export function loadTfJsonFile(args: any) {
  const jsonFile = args['json-file']
  const filePath = jsonFile.startsWith('/')
    ? jsonFile
    : `${hostAppHome}/${jsonFile}`
  if (!existsSync(filePath)) {
    throw new Error(`Tf json file ${filePath} not found`)
  }

  const json = JSON.parse(Deno.readTextFileSync(filePath))
  return { json, filePath }
}
