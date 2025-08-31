import * as base from '@diac/base-components'
import { requiredSchema } from './index.ts'
import type { TfRenderOptions } from '../types.ts'

export const globalCategory = (
  _renderOptions: TfRenderOptions,
  category: string,
  tfRoot: base.Props,
  node: base.NodeTree,
) => {
  const key = `_${category}`
  let tfElement = (node._props as any)[key]
  if (tfElement) {
    base.deepResolve(node, node._props, key)
  } else {
    tfElement = requiredSchema(node, '_inputSchema')
      .partial()
      .parse(node._props) as base.Props
    const resolvedElement = base.deepResolve(node, tfElement)

    const { _inputSchema } = node._props as any
    if (_inputSchema) {
      _inputSchema.strict().parse(resolvedElement)
    }
  }

  tfRoot[category] ??= {}
  base.deepMerge(tfRoot[category], tfElement)
}
