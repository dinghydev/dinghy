import Debug from 'debug'
import {
  DEFAULT_APP,
  DEFAULT_STAGE,
  DEFAULT_VIEW,
  Item,
  Props,
  Stacks,
  StacksSchema,
  StackType,
} from './types.ts'
import { deepMerge } from './deepMerge.ts'
const debug = Debug('stackUtils')

const parseStackFromId = (stackId: string): StackType => {
  const segments = stackId.split('-')
  const split = Math.floor(segments.length / 2)
  const name = segments.slice(0, split).join('-')
  return {
    id: stackId,
    name: name || undefined,
    env: stackId === DEFAULT_APP ? undefined : segments.slice(split).join('-'),
  }
}

const populateNamedItems = (
  stack: Props,
  field: string,
  defaultValue: string,
) => {
  const stackId = stack.id as string

  if (stack[field]) {
    const items: Props = {}
    Object.entries(stack[field]).map(([name, value]) => {
      const id = name === defaultValue ? stackId : `${stackId}-${name}`
      items[name] = {
        id,
        name,
        ...(value || {}),
      }
    })
    stack[field] = items
  } else {
    stack[field] = {
      [defaultValue]: {
        id: stackId,
        name: defaultValue,
      },
    }
  }
}

const populateStackDefaultItems = (stack: Props, renderOptions: any) => {
  populateNamedItems(stack, 'stages', DEFAULT_STAGE)
  populateNamedItems(stack, 'views', DEFAULT_VIEW)
  if (!stack.app) {
    stack.app = renderOptions.apps[stack.id as string] ||
      renderOptions.apps[DEFAULT_APP] ||
      Object.values(renderOptions.apps)[0]
  }
  return stack
}

export const createStage = (
  stack: StackType,
  name: string,
) => {
  return createDefaultItem(stack, name, DEFAULT_STAGE)
}

export const createView = (
  stack: StackType,
  name: string,
) => {
  return createDefaultItem(stack, name, DEFAULT_VIEW)
}

const createDefaultItem = (
  stack: StackType,
  name: string,
  defaultValue: string,
) => {
  return {
    id: name === defaultValue ? stack.id : `${stack.id}-${name}`,
    name,
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
    Object.entries(renderOptions.stacks).map(([stackId, stackOptions]) => {
      if (stackOptions) {
        stacks[stackId] = populateStackDefaultItems({
          ...parseStackFromId(stackId),
          ...stackOptions,
        }, renderOptions)
      } else {
        stacks[stackId] = populateStackDefaultItems(
          parseStackFromId(stackId),
          renderOptions,
        )
      }
    })
  }
  Object.entries(renderOptions.apps).map(([appId, appFile]) => {
    if (!stacks[appId]) {
      if (appId === DEFAULT_APP && renderOptions.stacks) {
        return
      }
      if (
        Object.values(stacks).find((stack) => (stack as any).app === appFile)
      ) {
        return
      }
      stacks[appId] = populateStackDefaultItems(
        parseStackFromId(appId),
        renderOptions,
      )
    }
    stacks[appId].app ??= appFile
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
    loadFilesData(stackOptions, 'data/stacks', stackOptions.stack.id) ||
    loadFilesData(stackOptions, 'data', stackOptions.stack.id) ||
    loadFilesData(stackOptions, 'config/settings', stackOptions.stack.id) ||
    loadFilesData(stackOptions, 'config', stackOptions.stack.id)
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
      const fileName = `${filePaths.pop()}.yaml`
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
      const value = current[`${tag}.yaml`]
      if (value) {
        deepMerge(data, value)
        debug('loaded file data %s %s/%s.yaml', name, path, tag)
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

export const mergeStackOptions = (
  stack: StackType,
  input: string[],
  field: string,
) => {
  return Object.values(
    mergeStackItemList(
      stack,
      stack[`${field}s` as keyof StackType],
      input,
      field === 'stage' ? DEFAULT_STAGE : DEFAULT_VIEW,
    ),
  ) as Item[]
}

const mergeStackItemList = (
  stack: StackType,
  items: any,
  input: string[],
  defaultValue: string,
) => {
  input?.map((name) => {
    if (!items[name]) {
      if (name === defaultValue) {
        ;(Object.values(items)[0] as any).name = defaultValue
      } else {
        items[name] = { id: `${stack.id}-${name}`, name }
      }
    }
  })
  return Object.values(items) as Item[]
}
