import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KITCHEN_TABLE_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;shadow=0;direction=north;',
  _width: 2,
  _height: 140,
}

export function KitchenTable2(props: DiagramNodeProps) {
  return <Shape {...KITCHEN_TABLE_2} {...props} />
}
