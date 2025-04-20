import { setupDebug } from '../../utils/setupDebug.ts'
import { loadConfig } from '../../utils/loadConfig.ts'
import { parseOptions } from '../../utils/parseOptions.ts'
import Debug from 'debug'
import { loadStateJsonFile } from './loadStateJsonFile.ts'
import { parseResources } from './parseResources.ts'
import { generateApp } from './generateApp.ts'
import { createModel } from './createModel.ts'
import { tfGenerateOptions } from '../../utils/tfGenerateOptions.ts'
const debug = Debug('tf-generate')
setupDebug()
await loadConfig()

debug('tf generate started at %O', new Date())
const args = parseOptions(tfGenerateOptions, Deno.args, ['tf', 'generate'])
debug('args', args)
const resources = loadStateJsonFile(args)
const elements = await parseResources(args, resources)
const cloud = createModel(args, elements)
const app = generateApp(args, cloud)
if (args['app-tsx-file']) {
  Deno.writeTextFileSync(args['app-tsx-file'], app + '\n')
  console.log('app.tsx written to %s', args['app-tsx-file'])
} else {
  console.log('====app.tsx====================================')
  console.log(app)
  console.log('===============================================')
}
debug('tf generate finished at %O', new Date())
