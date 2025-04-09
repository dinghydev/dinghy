import { z } from 'zod'

interface Props {
  [key: string]: unknown
}
export const ItemSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  title: z.string().optional(),
})
export type Item = z.input<typeof ItemSchema>

export const StackSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  env: z.string().optional(),
  title: z.string().optional(),
  sequence: z.number().optional(),
  stages: z.record(z.string(), ItemSchema).optional(),
  views: z.record(z.string(), ItemSchema).optional(),
})

export type Stack = z.input<typeof StackSchema>

export const StacksSchema = z.object({
  stacks: z.record(z.string(), StackSchema),
})

export type Stacks = z.input<typeof StacksSchema>

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

const populateStackDefaultItems = (stack: Props) => {
  populateNamedItems(stack, 'stages', DEFAULT_STAGE)
  populateNamedItems(stack, 'views', DEFAULT_VIEW)
  return stack
}

export const createStack = (
  env: string,
  id?: string,
  name?: string,
  options?: Props,
) => {
  const stack = {
    id: id || (name ? `${name}-${env}` : env),
    name: name,
    env,
    ...(options || {}),
  }
  populateStackDefaultItems(stack)
  return stack
}

const parseStacksInput = (stacksInput: Props): Stacks => {
  if (!stacksInput) {
    return {
      stacks: { [defaultStack.id]: populateStackDefaultItems(defaultStack) },
    } as Stacks
  }

  const stacksOptions = stacksInput
  const stacks: Props = {}
  Object.keys(stacksOptions).map((stackId) => {
    const stackOptions = stacksOptions[stackId] as Props
    if (stackOptions) {
      if (stackOptions.stages) {
        stacks[stackId] = populateStackDefaultItems({
          ...parseStackFromId(stackId),
          ...stackOptions,
        })
      } else {
        Object.entries(stackOptions).map((entry) => {
          const env = entry[0]
          const id = `${stackId}-${env}`
          stacks[id] = populateStackDefaultItems({
            id,
            name: stackId,
            env,
            ...(entry[1] || {}),
          })
        })
      }
    } else {
      stacks[stackId] = populateStackDefaultItems(parseStackFromId(stackId))
    }
  })
  Object.values(stacks).map((stack: any, i) => {
    stack.sequence ??= (i + 1) * 10
  })
  return StacksSchema.parse({ stacks })
}

export const parseStacks = (stacksInput: Props, stackSpec?: string): Stacks => {
  const stacks = parseStacksInput(stacksInput).stacks
  if (stackSpec && !stacks[stackSpec]) {
    stacks[stackSpec] = populateStackDefaultItems(
      parseStackFromId(stackSpec),
    ) as Stack
  }
  return { stacks }
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
