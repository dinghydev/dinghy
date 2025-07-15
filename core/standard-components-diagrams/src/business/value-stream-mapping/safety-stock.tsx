import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAFETY_STOCK = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.buffer_or_safety_stock;',
  _width: 40,
  _height: 100,
}

export function SafetyStock(props: DiagramNodeProps) {
  return <Shape {...SAFETY_STOCK} {...props} />
}
