import type { CommandArgs, CommandContext, Commands } from '@diac/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@diac/cli'
import { rendererMapping } from './renderMapping.ts'

import { containerAppHome, execCmd, isCi, diacAppConfig } from '@diac/cli'
import { deepMerge, doWithStacks } from '@diac/base-components'
import chalk from 'chalk'
import Debug from 'debug'
import { requireStacksConfig } from '@diac/cli'
import { renderOptions } from '../../utils/renderOptions.ts'
const debug = Debug('render')

const run = async (context: CommandContext, args: CommandArgs) => {
  requireStacksConfig()
  const loadApp = async (renderOptions: any) => {
    const appFullPath = `${containerAppHome}/${renderOptions.stack.app}`
    debug('loading app from %O', appFullPath)
    const app = await import(appFullPath)
    if (app.renderOptions) {
      deepMerge(renderOptions, app.renderOptions)
      debug('applied app render options: %O', app.renderOptions)
    }
    return app.App
  }

  debug('render started at %O', new Date())

  const options: any = deepMerge({}, diacAppConfig)
  if (args['tf-generateImport']) {
    options.tf ??= {}
    options.tf.generateImport = true
  }
  await doWithStacks(
    options,
    args.stack,
    async (stackRenderOptions: any) => {
      const app = await loadApp(stackRenderOptions)
      for (const formatString of args.format || ['default']) {
        const renderers =
          rendererMapping[formatString as keyof typeof rendererMapping]
        for (const renderer of renderers) {
          await renderer(app, stackRenderOptions, args, context)
        }
      }
    },
  )

  debug('render finished at %O', new Date())

  if (isCi() && !Deno.env.get('CI_SKIP_GIT_DIFF_CHECK')) {
    const changes = await execCmd(`git diff ${args.output}`)
    if (changes) {
      console.log(`Detected changes in ${args.output} folder`)
      console.log(chalk.red(changes))
      throw new Error('Unexpected changes detected in output folder')
    }
  }
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: renderOptions,
  [RUN_SYMBOL]: run,
}

export default commands
