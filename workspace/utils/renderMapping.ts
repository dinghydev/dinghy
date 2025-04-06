import { renderJson } from '@reactiac/renderer-json'
import { renderDrawio } from '@reactiac/renderer-drawio'
import { renderTf } from '@reactiac/renderer-tf'
import { dirname } from '@std/path'
import Debug from 'debug'
import { existsSync } from '@std/fs/exists'
import { deepMerge } from '@std/collections/deep-merge'
const debug = Debug('rendererMapping')

const writeFile = async (path: string, content: string) => {
  const folder = dirname(path)
  await Deno.mkdir(folder, { recursive: true })
  await Deno.writeTextFile(path, content)
  debug('rendered to', path)
}

const json = async (app: any, options: any, args: any) => {
  const result = await renderJson(app, options)
  const outputPath = `${args.output}/${options.stack.id}.json`
  await writeFile(outputPath, result.result)
}

const saveStackInfo = async (options: any, args: any, stackInfo: any) => {
  const outputPath = `${args.output}/${options.stack.id}-stack-info.json`
  if (existsSync(outputPath)) {
    const existingStackInfo = JSON.parse(Deno.readTextFileSync(outputPath))
    stackInfo = deepMerge(existingStackInfo, stackInfo)
  }
  await writeFile(outputPath, JSON.stringify(stackInfo, null, 2))
}

const diagram = async (app: any, options: any, args: any) => {
  let stackInfo: any = {
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
      view = {
        id: `${options.stack.id}-${viewString}`,
        name: viewString,
      }
    }
    options.view = view
    const result = await renderDrawio(app, options)
    const outputPath = `${args.output}/${view.id}.drawio`
    await writeFile(outputPath, result.result)
    renderedViews.push(viewString)
    collectedViews = result.views
    stackInfo.views[view.id] = view
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
  await saveStackInfo(options, args, stackInfo)
}

const tf = async (app: any, options: any, args: any) => {
  const availableStages = options.stack.stages
  let selectedStages = args.stage
  let stackInfo: any = {
    tfImageVersion: Deno.env.get('TF_IMAGE_VERSION'),
    stages: {},
  }
  const renderedStages: string[] = []
  if (!selectedStages) {
    selectedStages = Object.keys(availableStages)
  }
  let collectedStages: string[] = []
  const renderStage = async (stageString: string) => {
    let stage = availableStages[stageString]
    if (!stage) {
      stage = {
        id: `${options.stack.id}-${stageString}`,
        name: stageString,
      }
    }
    options.stage = stage
    const result = await renderTf(app, options)
    const outputPath = `${args.output}/${stage.id}/${stage.id}.tf.json`
    await writeFile(outputPath, result.result)
    renderedStages.push(stageString)
    collectedStages = result.stages
    stackInfo.stages[stage.id] = stage
  }
  for (const stageString of selectedStages) {
    await renderStage(stageString)
  }
  if (!args.stage) {
    for (const stageString of collectedStages) {
      if (!renderedStages.includes(stageString)) {
        await renderStage(stageString)
      }
    }
  }
  await saveStackInfo(options, args, stackInfo)
}

export const rendererMapping = {
  json: [json],
  drawio: [diagram],
  tf: [tf],
  all: [json, diagram, tf],
}
