import { deepResolve, type NodeTree } from '@dinghy/base-components'
import type { HostContainer } from '../types.ts'

const processConditionFlag = (_node: NodeTree) => {
  const condition = _node._props._condition
  if (condition !== undefined) {
    let toBeRemoved = true
    try {
      if (deepResolve(condition)) {
        toBeRemoved = false
      }
    } catch {
      // Ignore condition evaluation failures and remove node.
    }
    if (toBeRemoved) {
      _node._parent!._children.splice(
        _node._parent!._children.indexOf(_node),
        1,
      )
      return
    }
  }
  _node._children.map((child: NodeTree) => processConditionFlag(child))
}

export const p25ApplyCondition = (
  container: HostContainer<unknown, unknown>,
) => {
  processConditionFlag((container.rootElement!.props as any)._node)
}
