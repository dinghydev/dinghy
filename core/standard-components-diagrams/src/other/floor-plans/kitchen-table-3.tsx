import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KITCHEN_TABLE_3 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;shadow=0;direction=south',
  _width: 3,
  _height: 140,
}

export function KitchenTable3(props: DiagramNodeProps) {
  return <Shape {...KITCHEN_TABLE_3} {...props} />
}
