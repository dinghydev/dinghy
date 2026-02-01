import { CmdInput, cmdStream, DinghyError, hostAppHome } from '@dinghy/cli'
import { onEvent } from '@dinghy/base-components'
import { debounce } from '@std/async/debounce'

import { containerAppHome, dinghyAppConfig, isCi } from '@dinghy/cli'
import { deepMerge, doWithStacks } from '@dinghy/base-components'
import chalk from 'chalk'
import { requireStacksConfig } from '@dinghy/cli'
import { execa } from 'execa'
import Debug from 'debug'
import { existsSync } from 'node:fs'
import { loadUrlData } from '../utils/loadUrlData.ts'
import { Args } from '@std/cli/parse-args'
import { rendererMapping } from '../services/render/renderMapping.ts'
const debug = Debug('render')

const WATCH_FILE_TYPES = ['ts', 'tsx', 'yaml']

export const schema: CmdInput = {
  description: 'Render from `tsx` files to target formats',
  options: [
    {
      name: 'format',
      description: 'Formats to render. e.g. `tf`, `diagram` or `json`',
      multiple: true,
    },
    {
      name: 'view',
      description:
        'Views to render. Special view `overview` and `all` are avilable always.',
      multiple: true,
    },
    {
      name: 'tf-generate-import',
      description: 'Generate import statements for tf',
      boolean: true,
    },
    {
      name: 'diagram-create-md',
      description: 'Create markdown file for diagram',
      boolean: true,
    },
    {
      name: 'diagram-save-view',
      description: 'Save view to stack.info.json',
      boolean: true,
    },
    {
      name: 'watch',
      description: 'Re-render when changes of yaml/ts/tsx files detected',
      boolean: true,
    },
    {
      name: 'diagram-png',
      description:
        'Generate png file for diagram with `true` or `false`. If not specified, png will generated in none CI environment by default',
    },
  ],
  args: [{
    name: 'stack',
    description:
      'Stack name or tsx file name. If not specified, all stacks will be rendered',
  }],
}

const renderAndWatch = async (args: Args) => {
  const renderInNewProcess = async (changes?: string[]) => {
    try {
      const noneWatchArgs = args.originalArgs.filter((arg: string) =>
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

export const run = async (args: Args) => {
  if (args.watch) {
    await renderAndWatch(args)
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
      if (typeof app.renderOptions === 'function') {
        deepMerge(renderOptions, app.renderOptions(renderOptions))
      } else {
        deepMerge(renderOptions, app.renderOptions)
      }

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
      await loadStackConfigUrls(stackRenderOptions)
      await onEvent('render.start', stackRenderOptions)
      for (const formatString of args.format || ['default']) {
        const renderers =
          rendererMapping[formatString as keyof typeof rendererMapping]
        for (const renderer of renderers) {
          await renderer(app, stackRenderOptions, args)
        }
      }
      await onEvent('render.finish', stackRenderOptions)
    },
  )

  debug('render finished at %O', new Date())

  if (isCi() && !Deno.env.get('CI_SKIP_GIT_DIFF_CHECK')) {
    const changes = await cmdStream(
      `git diff ${args.output}`,
      false,
      hostAppHome,
    )
    if (changes.output) {
      console.log(`Detected changes in ${args.output} folder`)
      console.log(chalk.red(changes.output))
      throw new DinghyError('Unexpected changes detected in output folder')
    }
  }
}

async function loadStackConfigUrls(stackRenderOptions: any) {
  if (stackRenderOptions.stack.configUrls) {
    for (
      const [path, configUrl] of Object.entries(
        stackRenderOptions.stack.configUrls,
      )
    ) {
      let config = await loadUrlData(configUrl as string)
      for (const key of path.split('.').reverse()) {
        if (key !== '') {
          config = { [key]: config }
        }
      }
      deepMerge(stackRenderOptions, config)
    }
  }
}
