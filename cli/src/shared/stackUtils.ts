import Debug from 'debug'
import { Props, Stacks, StacksSchema, StackType } from './types.ts'
import { deepMerge } from './deepMerge.ts'
import { hostAppHome } from './home.ts'
import { toTitle } from './stringUtils.ts'
import { basename } from '@std/path/basename'
const debug = Debug('stackUtils')

export const DEFAULT_APPS = ['app', 'iac']
export const DEFAULT_VIEW = 'overview'

const populateNamedItems = (
  stack: Props,
  field: string,
  defaultValue: string,
) => {
  const stackName = stack.name as string

  if (stack[field]) {
    const items: Props = {}
    Object.entries(stack[field]).map(([name, value]) => {
      const fileName = name === defaultValue
        ? stackName
        : `${stackName}-${name}`
      items[name] = {
        fileName,
        name,
        title: toTitle(name),
        ...(value || {}),
      }
    })
    stack[field] = items
  } else {
    stack[field] = {
      [defaultValue]: {
        fileName: stackName,
        name: defaultValue,
        title: toTitle(defaultValue),
      },
    }
  }
}

const populateStackDefaultItems = (stack: Props, renderOptions: any) => {
  if (DEFAULT_APPS.includes(stack.name as string)) {
    stack.name = basename(hostAppHome)
    debug('setting stack name %s base on app home %s', stack.name, hostAppHome)
  }
  populateNamedItems(stack, 'views', DEFAULT_VIEW)
  if (!stack.app) {
    stack.app = renderOptions.apps[stack.name as string]
    if (!stack.app) {
      stack.app = renderOptions.apps[
        DEFAULT_APPS.find((app) => renderOptions.apps[app]) as string
      ]
    }
    if (!stack.app) {
      stack.app = Object.values(renderOptions.apps)[0]
    }
  }
  stack.title ??= toTitle(stack.name as string)
  return stack
}

export const createView = (
  stack: StackType,
  name: string,
) => {
  const fileName = name === DEFAULT_VIEW ? stack.name : `${stack.name}-${name}`
  return {
    name,
    title: toTitle(name),
    fileName,
  }
}

export const doWithStacks = async (
  options: any,
  stackSpec: string | undefined,
  fn: (stackOptions: any) => Promise<void>,
) => {
  const stacks = parseStacks(options, stackSpec)
  for (const [spec, stack] of Object.entries(stacks)) {
    if (stackSpec && spec !== stackSpec) {
      continue
    }
    const stackOptions = deepMerge({}, options)
    stackOptions.stacks = stacks
    stackOptions.stack = stack
    loadStackConfig(stackOptions)
    await fn(stackOptions)
  }
}

export const parseStacks = (
  renderOptions: any,
  stackSpec?: string,
): Stacks => {
  const stacks: any = {}
  if (renderOptions.stacks) {
    Object.entries(renderOptions.stacks).map(([name, stackOptions]) => {
      if (stackOptions) {
        stacks[name] = populateStackDefaultItems({
          name,
          ...stackOptions,
        }, renderOptions)
      } else {
        stacks[name] = populateStackDefaultItems(
          { name },
          renderOptions,
        )
      }
    })
  }
  Object.entries(renderOptions.apps).map(([name, appFile]) => {
    if (!stacks[name]) {
      if (DEFAULT_APPS.includes(name) && renderOptions.stacks) {
        return
      }
      if (
        Object.values(stacks).find((stack) => (stack as any).app === appFile)
      ) {
        return
      }
      stacks[name] = populateStackDefaultItems(
        { name },
        renderOptions,
      )
    }
    stacks[name].app ??= appFile
  })
  if (stackSpec && !stacks[stackSpec]) {
    throw new Error(`Stack ${stackSpec} not found`)
  }
  Object.values(stacks).map((stack: any, i) => {
    stack.sequence ??= (i + 1) * 10
  })

  return StacksSchema.parse(stacks)
}

export const loadStackConfig = (
  stackOptions: any,
) => {
  const settings =
    loadFilesData(stackOptions, 'config/stacks', stackOptions.stack.name) ||
    loadFilesData(stackOptions, 'config', stackOptions.stack.name)
  if (settings) {
    deepMerge(stackOptions, settings)
  }
  if (stackOptions.stack.override) {
    deepMerge(stackOptions, stackOptions.stack.override)
    debug('loaded stack override %O', stackOptions.stack.override)
  }
  return stackOptions.stack as StackType
}

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

const nameTags = (name: string) => {
  return collectTags(['default'], name.split('-'))
}

export const loadFilesData = (options: any, path: string, name?: string) => {
  const paths = path.split('/')
  let current = options.files
  for (const path of paths) {
    if (!current || typeof current !== 'object') {
      break
    }
    current = current[path]
  }
  if (current) {
    current = current['files']
  }
  if (!current) {
    if (!name) {
      const filePaths = path.split('/')
      const fileName = `${filePaths.pop()}.yml`
      let current = options.files
      for (const path of filePaths) {
        if (!current || typeof current !== 'object') {
          break
        }
        current = current[path]
      }
      if (current) {
        current = current['files']
        return current[fileName]
      }
    }
    return undefined
  }
  const data: any = {}
  if (name) {
    const tags = nameTags(name)
    tags.map((tag) => {
      const value = current[`${tag}.yml`]
      if (value) {
        deepMerge(data, value)
        debug('loaded file data %s %s/%s.yml', name, path, tag)
      }
    })
  } else {
    Object.values(current).map((value) => {
      deepMerge(data, value)
    })
  }
  return data
}

export const loadFile = (options: any, path: string) => {
  const paths = path.split('/')
  const name = paths.pop() as string
  let current = options.files
  for (const path of paths) {
    if (!current || typeof current !== 'object') {
      break
    }
    current = current[path]
  }
  if (current) {
    current = current['files']
  }
  if (!current) {
    return undefined
  }
  return current[name]
}
