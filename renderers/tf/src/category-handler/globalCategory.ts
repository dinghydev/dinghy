import type { NodeTree, Props } from '@reactiac/base-components'
import { mergician } from 'mergician'
import { utils } from '@reactiac/base-components'
const { deepResolve } = utils
import { requiredSchema } from './index.js'

export const globalCategory = (
  category: string,
  tfRoot: Props,
  node: NodeTree,
) => {
  const key = `_${category}`
  let tfElement = (node._props as any)[key]
  if (tfElement) {
    deepResolve(node, node._props, key)
  } else {
    tfElement = requiredSchema(node, '_inputSchema')
      .partial()
      .parse(node._props) as Props
    const resolvedElement = deepResolve(node, tfElement)

    const { _inputSchema } = node._props as any
    if (_inputSchema) {
      _inputSchema.strict().parse(resolvedElement)
    }
  }

  tfRoot[category] ??= {}
  tfRoot[category] = mergician(tfRoot[category] as Props, tfElement)
}
