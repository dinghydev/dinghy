import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAFETY_STOCK = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.buffer_or_safety_stock;',
  },
  _width: 40,
  _height: 100,
}

export function SafetyStock(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SAFETY_STOCK)} />
}
