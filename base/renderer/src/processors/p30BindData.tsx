import type { ReactElement } from 'react'
import type { NodeTree } from '@reactiac/base-components'
import type { HostContainer } from '../types.ts'

export const p30BindData = (
  container: HostContainer<unknown, unknown>,
) => {
  const { data } = container.renderOptions as { data: any }
  if (data) {
    const keys = Object.keys(data)

    const bindAttributes = (element: ReactElement) => {
      const _node = (element as any).props._node as NodeTree
      const _props = _node._props as any
      const targetKeys = [_props._id, ..._props._tags]
      for (let i = targetKeys.length - 1; i >= 0; i--) {
        const key = targetKeys[i]
        if (keys.includes(key)) {
          Object.assign(_props, data[key])
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
