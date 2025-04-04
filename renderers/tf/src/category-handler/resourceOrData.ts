import type { NodeTree, Props } from '@reactiac/base-components'
import { mergician } from 'mergician'
import { utils } from '@reactiac/base-components'
const { deepResolve } = utils
import { requiredSchema } from './index.ts'

export const resourceOrData = (
  category: string,
  tfRoot: Props,
  node: NodeTree,
  schemaField: string,
) => {
  const schema = requiredSchema(node, schemaField)
  // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
  const tfCategory = (tfRoot[category] ??= {}) as Props
  // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
  const tfElements = (tfCategory[node._props._type as any] ??= {}) as Props
  let tfElement: any
  if ((node._props as any)[category]) {
    tfElement = schema.partial().parse(node._props) as Props
    tfElement = mergician(tfElement, (node._props as any)[category]) as Props
  } else {
    tfElement = schema.parse(node._props) as Props
  }
  let resolvedElement = deepResolve(node, tfElement)
  resolvedElement = schema.strict().parse(resolvedElement)
  tfElements[node._props._id as any] = resolvedElement
}
