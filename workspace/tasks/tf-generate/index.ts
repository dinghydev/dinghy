import { setupDebug } from '../../utils/setupDebug.ts'
import { hostAppHome, loadConfig } from '../../utils/loadConfig.ts'
import { parseOptions } from '../../utils/parseOptions.ts'
import Debug from 'debug'
import { loadStateJsonFile } from './loadStateJsonFile.ts'
import { parseResources } from './parseResources.ts'
import { generateApp } from './generateApp.ts'
import { createModel } from './createModel.ts'
import { tfGenerateOptions } from '../../utils/tfGenerateOptions.ts'
import { existsSync } from '@std/fs/exists'
const debug = Debug('tf-generate')
setupDebug()
await loadConfig()

debug('tf generate started at %O', new Date())
const args = parseOptions(tfGenerateOptions, Deno.args, ['tf', 'generate'])
debug('args', args)
const resources = loadStateJsonFile(args)
const elements = await parseResources(args, resources)
const customiseGeneratedElementsFile =
  `${hostAppHome}/customiseGeneratedElements.ts`
if (existsSync(customiseGeneratedElementsFile)) {
  const customiser = await import(
    customiseGeneratedElementsFile
  )
  debug('applying', customiseGeneratedElementsFile)
  customiser.customiseGeneratedElements(elements)
}
const cloud = createModel(args, elements)
const app = generateApp(args, cloud)
const appFile = args['app-file']
if (appFile) {
  const filePath = appFile.startsWith('/')
    ? appFile
    : `${hostAppHome}/${appFile}`
  Deno.writeTextFileSync(filePath, app + '\n')
  console.log('app.tsx written to %s', filePath)
} else {
  console.log('====app.tsx====================================')
  console.log(app)
  console.log('===============================================')
}
debug('tf generate finished at %O', new Date())
