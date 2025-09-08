import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAFETY_STOCK = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.buffer_or_safety_stock;',
  },
  _original_width: 40,
  _original_height: 100,
}

export function SafetyStock(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAFETY_STOCK}
      {...props}
      _style={extendStyle(SAFETY_STOCK, props)}
    />
  )
}
