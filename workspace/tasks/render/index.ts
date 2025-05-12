import { setupDebug } from '../../utils/setupDebug.ts'
import {
  containerAppHome,
  loadConfig,
  reactiacAppConfig,
} from '../../utils/loadConfig.ts'
import { renderOptions } from '../../utils/renderOptions.ts'
import { parseOptions } from '../../utils/parseOptions.ts'
import { rendererMapping } from './renderMapping.ts'
import Debug from 'debug'
import { deepMerge } from '../../utils/deepMerge.ts'
import { doWithStacks } from '../../utils/stackUtils.ts'
const debug = Debug('render')
try {
  setupDebug()
  await loadConfig()

  const loadApp = async (appPath: string) => {
    const appFullPath = `${containerAppHome}/${appPath}`
    debug('loading app from %O', appFullPath)
    const app = await import(appFullPath)
    return app.App
  }

  debug('render started at %O', new Date())
  const cmdOptions = parseOptions(renderOptions, Deno.args, ['render'])

  const options: any = deepMerge({}, reactiacAppConfig)
  if (cmdOptions['tf-generateImport']) {
    options.tf ??= {}
    options.tf.generateImport = true
  }
  await doWithStacks(
    options,
    cmdOptions.stack,
    async (stackRenderOptions: any) => {
      const app = await loadApp(stackRenderOptions.stack.app)
      for (const formatString of cmdOptions.format || ['default']) {
        const renderers =
          rendererMapping[formatString as keyof typeof rendererMapping]
        for (const renderer of renderers) {
          await renderer(app, stackRenderOptions, cmdOptions)
        }
      }
    },
  )

  debug('render finished at %O', new Date())
} catch (e) {
  console.error(e)
  throw e
}
