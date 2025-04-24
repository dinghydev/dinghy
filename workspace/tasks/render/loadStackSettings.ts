import Debug from 'debug'
import { hostAppHome } from '../../utils/loadConfig.ts'
import { existsSync } from '@std/fs/exists'
import { deepMerge } from '@std/collections/deep-merge'
import { parse } from '@std/yaml'
const debug = Debug('loadStackSettings')

const collectTags = (result: string[], variants: string[], size = 1) => {
  const loopCount = variants.length - size
  for (let i = 0; i <= loopCount; i++) {
    result.push(variants.slice(i, i + size).join('-'))
  }
  if (loopCount > 0) {
    collectTags(result, variants, size + 1)
  }
  return result
}

const stackTags = (stackId: string) => {
  return collectTags(['default'], stackId.split('-'))
}

export const loadStackSettings = async (stackId: string) => {
  const settingsPath = `${hostAppHome}/config/settings`
  if (existsSync(settingsPath)) {
    const tags = stackTags(stackId)
    debug('stack %s tags %O', stackId, tags)

    let result = {}

    for (const tag of tags) {
      const source = `${settingsPath}/${tag}.yaml`
      if (existsSync(source)) {
        debug('loading stack settings from %s', source)
        const text = await Deno.readTextFile(source)
        const yamlData = parse(text)
        result = deepMerge(result, yamlData as any)
      }
    }
    return result
  }
}
