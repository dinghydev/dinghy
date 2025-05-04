import { renderJson } from '@reactiac/renderer-json'
import { renderDrawio } from '@reactiac/renderer-drawio'
import { renderTf } from '@reactiac/renderer-tf'
import { dirname } from '@std/path'
import Debug from 'debug'
import { existsSync } from '@std/fs/exists'
import chalk from 'chalk'
import { mergician } from 'mergician'
import { hostAppHome } from '../../utils/loadConfig.ts'
import { createStage, createView } from '../../utils/stackUtils.ts'
const debug = Debug('rendererMapping')

const writeFile = async (path: string, content: string) => {
  const filePath = `${hostAppHome}/${path}`
  const folder = dirname(filePath)
  await Deno.mkdir(folder, { recursive: true })
  await Deno.writeTextFile(filePath, content)

  debug('rendered to', filePath)
  if (path.endsWith('stack-info.json')) {
    console.log(chalk.green('saved stack info to:'), filePath)
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
  const outputPath = `${args.output}/${options.stack.id}-stack-info.json`
  const outputFile = `${hostAppHome}/${outputPath}`
  if (existsSync(outputFile)) {
    const stackInfoText = await Deno.readTextFile(outputFile)
    if (stackInfoText) {
      const existingStackInfo = JSON.parse(stackInfoText)
      stackInfo = mergician(existingStackInfo, stackInfo)
    }
  }
  await writeFile(outputPath, JSON.stringify(stackInfo, null, 2))
}

const diagram = async (app: any, options: any, args: any) => {
  const stackInfo: any = {
    views: {},
  }
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
    }
    options.view = view
    const outputPath = `${args.output}/${view.id}.drawio`
    debug('rendering drawio to %s/%s', hostAppHome, outputPath)
    const result = await renderDrawio(app, options)
    await writeFile(outputPath, result.result)
    renderedViews.push(viewString)
    collectedViews = result.views
    if (args['diagram-saveView']) {
      stackInfo.views[view.id] = view
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
  if (Object.values(stackInfo.views).length) {
    await saveStackInfo(options, args, stackInfo)
  }
}

const tf = async (app: any, options: any, args: any) => {
  const availableStages = options.stack.stages
  let selectedStages = args.stage
  const stackInfo: any = {
    tfImageVersion: Deno.env.get('TF_IMAGE_VERSION'),
    stages: {},
  }
  const renderedStages: string[] = []
  if (!selectedStages) {
    selectedStages = Object.keys(availableStages)
  }
  const renderStage = async (stageString: string) => {
    let stage = availableStages[stageString]
    if (!stage) {
      stage = createStage(options.stack, stageString)
    }
    options.stage = stage
    const outputPath = `${args.output}/${stage.id}/${stage.id}.tf.json`
    debug('rendering tf to %s/%s', hostAppHome, outputPath)
    const result = await renderTf(app, options)
    if (result.result !== '{}') {
      await writeFile(outputPath, result.result)
      renderedStages.push(stageString)
      stackInfo.stages[stage.id] = stage
      if (!args.stage) {
        for (const stageString of result.stages) {
          if (!renderedStages.includes(stageString)) {
            await renderStage(stageString)
          }
        }
      }
    }
  }
  for (const stageString of selectedStages) {
    await renderStage(stageString)
  }
  if (Object.values(stackInfo.stages).length) {
    await saveStackInfo(options, args, stackInfo)
  }
}

export const rendererMapping = {
  json: [json],
  drawio: [diagram],
  tf: [tf],
  default: [diagram, tf],
  all: [json, diagram, tf],
}
