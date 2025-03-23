import {
  type Item,
  type Props,
  type Stack,
  type Stacks,
  StacksSchema,
} from '../types.js'

const parseStackFromId = (stackId: string): Stack => {
  const segments = stackId.split('-')
  const split = Math.floor(segments.length / 2)
  const name = segments.slice(0, split).join('-')
  return {
    id: stackId,
    name: name || undefined,
    env: segments.slice(split).join('-'),
  }
}

const defaultStack = {
  id: 'app',
  sequence: 10,
}

export const DEFAULT_STAGE = 'main'
export const DEFAULT_VIEW = 'overview'

const populateNamedItems = (
  stack: Props,
  field: string,
  defaultValue: string,
) => {
  const stackId = stack.id as string

  if (stack[field]) {
    const items: Props = {}
    Object.entries(stack[field]).map((entry) => {
      const name = entry[0]
      const id = `${stackId}-${name}`
      items[name] = {
        id,
        name,
        ...(entry[1] || {}),
      }
    })
    stack[field] = items
  } else {
    stack[field] = {
      [defaultValue]: {
        id: `${stackId}-${defaultValue}`,
        name: defaultValue,
      },
    }
  }
}

const populateItems = (stack: Props) => {
  populateNamedItems(stack, 'stages', DEFAULT_STAGE)
  populateNamedItems(stack, 'views', DEFAULT_VIEW)
  return stack
}

export const parseStacks = (stacksInput: Props): Stacks => {
  if (!stacksInput) {
    return {
      stacks: { [defaultStack.id]: populateItems(defaultStack) },
    } as Stacks
  }

  const stacksOptions = stacksInput
  const stacks: Props = {}
  Object.keys(stacksOptions).map((stackId) => {
    const stackOptions = stacksOptions[stackId] as Props
    if (stackOptions) {
      if (stackOptions.stages) {
        stacks[stackId] = populateItems({
          ...parseStackFromId(stackId),
          ...stackOptions,
        })
      } else {
        Object.entries(stackOptions).map((entry) => {
          const env = entry[0]
          const id = `${stackId}-${env}`
          stacks[id] = populateItems({
            id,
            name: stackId,
            env,
            ...(entry[1] || {}),
          })
        })
      }
    } else {
      stacks[stackId] = populateItems(parseStackFromId(stackId))
    }
  })
  Object.values(stacks).map((stack: any, i) => {
    stack.sequence ??= (i + 1) * 10
  })
  return StacksSchema.parse({ stacks })
}

export const mergeStackOptions = (
  stack: Stack,
  input: string[],
  field: string,
) => {
  return Object.values(
    mergeStackItemList(
      stack,
      stack[`${field}s` as keyof Stack],
      input,
      field === 'stage' ? DEFAULT_STAGE : DEFAULT_VIEW,
    ),
  ) as Item[]
}

const mergeStackItemList = (
  stack: Stack,
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
