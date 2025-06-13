import type { ReactElement } from 'react'
import type { NodeTree } from '@reactiac/base-components'
import type { HostContainer } from '../types.ts'

export const p30BindData = (
  container: HostContainer<unknown, unknown>,
) => {
  const { bindings } = container.renderOptions as { bindings: any }
  if (bindings) {
    const keys = Object.keys(bindings)

    const bindAttributes = (element: ReactElement) => {
      const _node = (element as any).props._node as NodeTree
      const _props = _node._props as any
      const targetKeys = [_props._id, ..._props._tags]
      for (let i = targetKeys.length - 1; i >= 0; i--) {
        const key = targetKeys[i]
        if (keys.includes(key)) {
          Object.assign(_props, bindings[key])
          if (_props.onDataBind) {
            _props.onDataBind(_node)
          }
        }
      }
    }

    const bindData = (element: ReactElement) => {
      bindAttributes(element)
      ;(element.props as any).children?.map((c: ReactElement) => {
        bindData(c)
      })
    }

    bindData(container.rootElement as ReactElement)
  }
}
