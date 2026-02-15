import type { NodeTree } from '@dinghy/base-components'
import type { HostContainer } from '../types.ts'

export const p30BindData = async (
  container: HostContainer<unknown, unknown>,
) => {
  const { bindings } = container.renderOptions as { bindings: any }
  const keys = bindings ? Object.keys(bindings) : []

  const bindAttributes = async (_node: NodeTree) => {
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
      await _props._afterDataBind(_node)
    }
  }

  const bindData = async (_node: NodeTree) => {
    await bindAttributes(_node)
    if (_node._children) {
      for (const child of _node._children) {
        await bindData(child)
      }
    }
  }

  await bindData((container.rootElement!.props as any)._node)
}
