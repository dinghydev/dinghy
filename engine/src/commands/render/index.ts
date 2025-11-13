import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { rendererMapping } from './renderMapping.ts'
import { debounce } from '@std/async/debounce'

import { containerAppHome, dinghyAppConfig, execCmd, isCi } from '@dinghy/cli'
import { deepMerge, doWithStacks } from '@dinghy/base-components'
import chalk from 'chalk'
import { renderOptions, requireStacksConfig } from '@dinghy/cli'
import { execa } from 'execa'
import Debug from 'debug'
import { existsSync } from 'node:fs'
const debug = Debug('render')

const WATCH_FILE_TYPES = ['ts', 'tsx', 'yaml']

const renderAndWatch = async (context: CommandContext, _args: CommandArgs) => {
  const renderInNewProcess = async (changes?: string[]) => {
    try {
      const noneWatchArgs = context.originalArgs.filter((arg) =>
        arg !== '--watch'
      )
      const engineDir = '/dinghy/engine'
      const cwd = existsSync(engineDir) ? engineDir : Deno.cwd()
      await execa('deno', [
        'run',
        '-A',
        'src/index.ts',
        ...noneWatchArgs,
      ], {
        cwd,
        stdio: 'inherit',
        shell: true,
      })
    } catch (err) {
      if (changes) {
        console.error('Render failed for changes:', changes)
      } else {
        console.error('Initial render failed')
      }
      debug('Render failed error %O', err)
    }
    console.log('Watch ts/tsx changes from [%s] ...', containerAppHome)
  }

  await renderInNewProcess()

  // Queue lock
  let running = false
  let queued: (() => void) | null = null

  // Wrapped executor
  async function renderExclusive(changes: string[]) {
    if (running) {
      // overwrite any previously queued call
      queued = () => renderExclusive(changes)
      return
    }

    running = true
    await renderInNewProcess(changes)
    running = false

    // If something was queued, run it next
    if (queued) {
      const next = queued
      queued = null
      next()
    }
  }

  // Debounced version: waits 300ms after the *last* trigger
  const triggerRender = debounce((event: Deno.FsEvent) => {
    debug('Detected %s in watched files: %O', event.kind, event.paths)
    renderExclusive(event.paths)
  }, 300)

  for await (const event of Deno.watchFs(containerAppHome)) {
    const changes = event.paths.filter((p) =>
      WATCH_FILE_TYPES.includes(p.split('.').pop()!)
    )
    if (changes.length > 0) {
      triggerRender(event)
    }
  }
}

const run = async (context: CommandContext, args: CommandArgs) => {
  if (args.watch) {
    await renderAndWatch(context, args)
  }

  requireStacksConfig()
  const loadApp = async (renderOptions: any) => {
    const appFullPath = `${containerAppHome}/${renderOptions.stack.app}`
    debug('loading app from %O', appFullPath)
    const app = await import(appFullPath)
    if (!app.default) {
      throw new Error(
        `App ${appFullPath} does not have a default export function`,
      )
    }
    if (app.renderOptions) {
      deepMerge(renderOptions, app.renderOptions)
      debug('applied app render options: %O', app.renderOptions)
    }
    return app.default
  }

  debug('render started at %O', new Date())

  const options: any = deepMerge({}, dinghyAppConfig)
  if (args['tf-generate-import']) {
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
