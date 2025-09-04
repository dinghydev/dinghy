import { setupDebug } from '@diac/cli'
import { hostAppHome } from '@diac/cli'
import { parseOptions } from '@diac/cli'
import Debug from 'debug'
import { loadTfJsonFile } from '@diac/cli'
import { parseResources } from './parseResources.ts'
import { generateApp } from './generateApp.ts'
import { createModel } from './createModel.ts'
import { tfGenerateOptions } from '@diac/cli'
import { existsSync } from '@std/fs/exists'
import {
  CommandArgs,
  CommandContext,
  Commands,
  OPTIONS_SYMBOL,
  RUN_SYMBOL,
} from '@diac/cli'
const debug = Debug('tf-generate')
try {
  setupDebug()
  // await loadGlobalConfig();

  debug('tf generate started at %O', new Date())
  const args = parseOptions(tfGenerateOptions, Deno.args, ['tf', 'generate'])
  debug('args', args)
  const { json: { resources } } = loadTfJsonFile(args)
  const elements = await parseResources(args, resources)
  const customiseGeneratedElementsFile =
    `${hostAppHome}/customiseGeneratedElements.ts`
  if (existsSync(customiseGeneratedElementsFile)) {
    const customiser = await import(
      customiseGeneratedElementsFile
    )
    debug('applying', customiseGeneratedElementsFile)
    customiser.customiseGeneratedElements(elements)
  }
  const cloud = createModel(args, elements)
  const app = generateApp(args, cloud)
  const appFile = args['app-file']
  const filePath = appFile.startsWith('/')
    ? appFile
    : `${hostAppHome}/${appFile}`
  Deno.writeTextFileSync(filePath, app + '\n')
  console.log('app written to %s', filePath)
  debug('tf generate finished at %O', new Date())
} catch (e) {
  console.error(e)
  throw e
}

const run = (_context: CommandContext, _args: CommandArgs) => {
  // await runWorkspaceTask(["tf-generate", ...context.originalArgs]);
  throw new Error('Not implemented')
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: tfGenerateOptions,
  [RUN_SYMBOL]: run,
}

export default commands
