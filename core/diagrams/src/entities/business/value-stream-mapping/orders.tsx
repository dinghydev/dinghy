import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORDERS = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.orders;overflow=fill;',
  },
  _width: 100,
  _height: 60,
}

export function Orders(props: NodeProps) {
  return <Shape {...ORDERS} {...props} _style={extendStyle(ORDERS, props)} />
}
