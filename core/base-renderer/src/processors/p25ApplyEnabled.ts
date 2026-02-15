import { deepResolve, type NodeTree } from '@dinghy/base-components'
import type { HostContainer } from '../types.ts'

const processEnabledFlag = (_node: NodeTree) => {
  const enabled = _node._props._enabled
  if (enabled !== undefined) {
    let toBeRemoved = true
    try {
      if (deepResolve(enabled)) {
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
  _node._children.map((child: NodeTree) => processEnabledFlag(child))
}

export const p25ApplyEnabled = (
  container: HostContainer<unknown, unknown>,
) => {
  processEnabledFlag((container.rootElement!.props as any)._node)
}
