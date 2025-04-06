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
import { parseStacks } from '@reactiac/base-components'
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
options.stacks = parseStacks(options.stacks).stacks
if (cmdOptions.stack) {
  options.stack = options.stacks[cmdOptions.stack]
  if (!options.stack) {
    throw new Error(`Stack ${cmdOptions.stack} not found`)
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
