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
import { deepMerge } from '@std/collections'
import Debug from 'debug'
import { createStack, parseStacks } from '@reactiac/base-components'
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

for (const appName of cmdOptions.app || listApps()) {
  const app = await loadApp(appName)

  const options: any = deepMerge(reactiacAppConfig, {})
  if (cmdOptions['tf-generateImport']) {
    options.tf ??= {}
    options.tf.generateImport = true
  }
  options.stacks = parseStacks(appName, options.stacks).stacks
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
  for (const formatString of cmdOptions.format || ['default']) {
    const renderers =
      rendererMapping[formatString as keyof typeof rendererMapping]
    for (const renderer of renderers) {
      await renderer(app, options, cmdOptions)
    }
  }
}
debug('render finished at %O', new Date())
