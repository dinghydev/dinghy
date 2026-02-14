import type { NodeTree } from '@dinghy/base-components'
import type { HostContainer } from '../types.ts'

export const p30BindData = (
  container: HostContainer<unknown, unknown>,
) => {
  const { bindings } = container.renderOptions as { bindings: any }
  const keys = bindings ? Object.keys(bindings) : []

  const bindAttributes = (_node: NodeTree) => {
    const _props = _node._props as any

    if (bindings) {
      const targetKeys = [_props._id, ..._props._tags]
      for (let i = targetKeys.length - 1; i >= 0; i--) {
        const key = targetKeys[i]
        if (keys.includes(key)) {
          Object.assign(_props, bindings[key])
        }
      }
    }
    if (_props._afterDataBind) {
      _props._afterDataBind(_node)
    }
  }

  const bindData = (_node: NodeTree) => {
    bindAttributes(_node)
    _node._children?.map((c: NodeTree) => {
      bindData(c)
    })
  }

  bindData((container.rootElement!.props as any)._node)
}
