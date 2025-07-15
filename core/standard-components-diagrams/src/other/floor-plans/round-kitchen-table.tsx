import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUND_KITCHEN_TABLE = {
  _style: 'shape=ellipse;shadow=0;html=1;',
  _width: 4,
  _height: 140,
}

export function RoundKitchenTable(props: DiagramNodeProps) {
  return <Shape {...ROUND_KITCHEN_TABLE} {...props} />
}
