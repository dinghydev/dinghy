import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORDERS = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.orders;overflow=fill;',
  },
  _width: 100,
  _height: 60,
}

export function Orders(props: DiagramNodeProps) {
  return <Shape {...ORDERS} {...props} _style={extendStyle(ORDERS, props)} />
}
