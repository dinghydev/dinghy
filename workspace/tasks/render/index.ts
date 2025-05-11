import { setupDebug } from '../../utils/setupDebug.ts'
import {
  containerAppHome,
  hostAppHome,
  loadConfig,
  reactiacAppConfig,
} from '../../utils/loadConfig.ts'
import { renderOptions } from '../../utils/renderOptions.ts'
import { parseOptions } from '../../utils/parseOptions.ts'
import { rendererMapping } from './renderMapping.ts'
import Debug from 'debug'
import { loadStackConfig, parseStacks } from '@reactiac/base-components'
import { deepMerge } from '../../utils/deepMerge.ts'
const debug = Debug('render')
setupDebug()
await loadConfig()

const loadApp = async (appName: string) => {
  const appPath = `${containerAppHome}/${appName}.tsx`
  const app = await import(appPath)
  debug('loaded app from %O', appPath)
  return app.App
}

const listApps = () => {
  const apps: string[] = []
  for (const dirEntry of Deno.readDirSync(containerAppHome)) {
    if (dirEntry.name.endsWith('.tsx')) {
      apps.push(dirEntry.name.replace('.tsx', ''))
    }
  }
  if (!apps.length) {
    throw new Error(`No app.tsx found in ${hostAppHome}`)
  }
  return apps
}

debug('render started at %O', new Date())
const cmdOptions = parseOptions(renderOptions, Deno.args, ['render'])

try {
  for (const appName of cmdOptions.app || listApps()) {
    const app = await loadApp(appName)

    const options: any = deepMerge({}, reactiacAppConfig)
    if (cmdOptions['tf-generateImport']) {
      options.tf ??= {}
      options.tf.generateImport = true
    }
    const { stacks } = await parseStacks(
      cmdOptions.stack || appName.toLowerCase(),
      reactiacAppConfig.stacks,
      cmdOptions.stack,
    )
    options.stacks = stacks
    for (const stack of Object.values(stacks)) {
      if (cmdOptions.stack && stack.id !== cmdOptions.stack) {
        continue
      }
      options.stack = stack
      const stackOptions = deepMerge({}, options)
      loadStackConfig(stackOptions)
      for (const formatString of cmdOptions.format || ['default']) {
        const renderers =
          rendererMapping[formatString as keyof typeof rendererMapping]
        for (const renderer of renderers) {
          await renderer(app, stackOptions, cmdOptions)
        }
      }
    }
  }
  debug('render finished at %O', new Date())
} catch (e) {
  console.error(e)
  throw e
}
