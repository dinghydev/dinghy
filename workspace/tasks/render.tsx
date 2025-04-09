import { setupDebug } from '../utils/setupDebug.ts'
import {
  loadConfig,
  reactiacAppConfig,
  reactiacAppHome,
} from '../utils/loadConfig.ts'
import { renderOptions } from '../utils/renderOptions.ts'
import { parseOptions } from '../utils/parseOptions.ts'
import { rendererMapping } from '../utils/renderMapping.ts'
import { deepMerge } from '@std/collections'
import Debug from 'debug'
import { createStack, parseStacks } from '@reactiac/base-components'
const debug = Debug('render')
setupDebug()
await loadConfig()

const loadApp = async () => {
  const appPath = `${reactiacAppHome}/App.tsx`
  const app = await import(appPath)
  debug('loaded app from %O', appPath)
  return app.App
}

debug('render started at %O', new Date())
const app = await loadApp()
const cmdOptions = parseOptions(renderOptions, Deno.args, ['render'])
const options: any = deepMerge(reactiacAppConfig, {})
if (cmdOptions['tf-generateImport']) {
  options.tf ??= {}
  options.tf.generateImport = true
}
options.stacks = parseStacks(options.stacks).stacks
if (cmdOptions.stack) {
  options.stack = options.stacks[cmdOptions.stack]
  if (!options.stack) {
    console.warn(
      `Stack ${cmdOptions.stack} not found, generating as ondemand stack`,
    )
    options.stack = createStack(cmdOptions.stack)
    options.stacks = { [options.stack.id]: options.stack }
  }
} else {
  options.stack = Object.values(options.stacks)[0]
}

for (const formatString of cmdOptions.format || ['all']) {
  const renderers =
    rendererMapping[formatString as keyof typeof rendererMapping]
  for (const renderer of renderers) {
    await renderer(app, options, cmdOptions)
  }
}
debug('render finished at %O', new Date())
