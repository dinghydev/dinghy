import type { TfContext, TfNodeTree } from '../types.ts'
import { deepResolve } from '@dinghy/base-components'

function resolve(node: TfNodeTree) {
  const { _props } = node
  if ((_props as any)._category) {
    deepResolve(node, _props, '_category')
  }

  node._children.map(resolve)
}

export const p10ResolveCategory = ({ rootNode }: TfContext) => {
  resolve(rootNode)
}
