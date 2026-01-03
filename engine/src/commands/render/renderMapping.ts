import { renderJson } from '@dinghy/renderer-json'
import { renderDrawio } from '@dinghy/renderer-drawio'
import { renderTf } from '@dinghy/renderer-tf'
import { dirname, resolve } from 'jsr:@std/path@1.0.8'
import Debug from 'debug'
import { existsSync } from '@std/fs/exists'
import chalk from 'chalk'
import { hostAppHome } from '@dinghy/cli'
import { createView, deepMerge, toTitle } from '@dinghy/base-components'
import { runCommand } from '@dinghy/cli'
import png from '../diagram/png.ts'
import { OPTIONS_SYMBOL } from '@dinghy/cli'
const debug = Debug('rendererMapping')

const writeFile = async (path: string, content: string) => {
  const filePath = resolve(`${hostAppHome}/${path}`)
  const folder = dirname(filePath)
  await Deno.mkdir(folder, { recursive: true })
  await Deno.writeTextFile(filePath, content)

  debug('rendered to', filePath)
  if (path.endsWith('stack-info.json')) {
    console.log(chalk.green('saved stack info to:'), filePath)
  } else if (path.endsWith('.md')) {
    console.log(chalk.green('generated stack markdown to:'), filePath)
  } else {
    console.log(chalk.green('rendered:'), filePath)
  }
}

const json = async (app: any, options: any, args: any) => {
  const outputPath = `${args.output}/${options.stack.id}.json`
  debug('rendering json to %s/%s', hostAppHome, outputPath)
  const result = await renderJson(app, options)
  await writeFile(outputPath, result.result)
}

const saveStackInfo = async (options: any, args: any, stackInfo: any) => {
  const outputPath = `${args.output}/${options.stack.id}/stack-info.json`
  const outputFile = `${hostAppHome}/${outputPath}`
  if (existsSync(outputFile)) {
    const stackInfoText = await Deno.readTextFile(outputFile)
    if (stackInfoText) {
      const existingStackInfo = JSON.parse(stackInfoText)
      stackInfo = deepMerge(existingStackInfo, stackInfo)
    }
  }
  await writeFile(outputPath, JSON.stringify(stackInfo, null, 2))
}

const saveStackMd = async (options: any, args: any, views: any) => {
  const outputPath = `${args.output}/${options.stack.id}.md`
  const md: string[] = []
  md.push(
    `# ${
      options.stack.title || toTitle(options.stack.name || options.stack.id)
    }`,
  )
  if (options.stack.description) {
    md.push(options.stack.description)
  }
  for (const v of Object.values(views)) {
    const view = v as any
    const viewTitle = view.title || toTitle(view.name || view.id)
    md.push(`## ${viewTitle}`)
    if (view.description) {
      md.push(view.description)
    }
    md.push(`![${viewTitle}](${view.id}.png)`)
  }
  await writeFile(outputPath, md.join('\n\n') + '\n')
}

const generatePng = async (
  _options: any,
  _args: any,
  views: any,
  context: any,
) => {
  const pngArgs = ['png', ...context.originalArgs.slice(1)]
  for (const view of Object.values(views)) {
    pngArgs.push('-f')
    pngArgs.push(`${(view as any).id}.drawio`)
  }
  await runCommand({
    isEngine: true,
    prefix: ['diagram'],
    envPrefix: ['diagram'],
    args: pngArgs,
    originalArgs: ['diagram', ...pngArgs],
    commands: { png } as any,
    rootCommands: context.rootCommands,
    options: png[OPTIONS_SYMBOL],
  })
}

const diagram = async (app: any, options: any, args: any, context: any) => {
  const views: any = {}
  const availableViews = options.stack.views
  let selectedViews = args.view
  const renderedViews: string[] = []
  if (!selectedViews) {
    selectedViews = Object.keys(availableViews)
  }
  let collectedViews: string[] = []
  const renderView = async (viewString: string) => {
    let view = availableViews[viewString]
    if (!view) {
      view = createView(options.stack, viewString)
      if (
        viewString === 'all' &&
        !context.originalArgs.join(' ').includes('--view all')
      ) {
        view.disabled = true
      }
    }
    renderedViews.push(viewString)
    if (view.disabled) {
      debug('skip diabled view %s', viewString)
      return
    }
    options.view = view
    const outputPath = `${args.output}/${view.id}.drawio`
    debug('rendering drawio to %s/%s', hostAppHome, outputPath)
    const result = await renderDrawio(app, options)
    await writeFile(outputPath, result.result)
    collectedViews = result.views
    if (
      args['diagram-save-view'] || args['diagram-create-md'] ||
      args['diagram-png']
    ) {
      views[view.id] = view
    }
  }
  for (const viewString of selectedViews) {
    await renderView(viewString)
  }
  if (!args.view) {
    for (const viewString of collectedViews) {
      if (!renderedViews.includes(viewString)) {
        await renderView(viewString)
      }
    }
  }
  if (Object.values(views).length) {
    if (args['diagram-save-view']) {
      await saveStackInfo(options, args, { views })
    }
    if (args['diagram-create-md']) {
      await saveStackMd(options, args, views)
    }
    if (args['diagram-png']) {
      await generatePng(options, args, views, context)
    }
  }
}

const tf = async (app: any, options: any, args: any) => {
  const stackInfo: any = {}
  const outputPath =
    `${args.output}/${options.stack.id}/${options.stack.id}.tf.json`
  debug('rendering tf to %s/%s', hostAppHome, outputPath)
  const result = await renderTf(app, options)
  if (result.result !== '{}\n') {
    await writeFile(outputPath, result.result)
    stackInfo['stack'] = { id: options.stack.id }
    await saveStackInfo(options, args, stackInfo)
  }
}

export const rendererMapping = {
  json: [json],
  diagram: [diagram],
  tf: [tf],
  default: [diagram, tf],
  all: [json, diagram, tf],
}
