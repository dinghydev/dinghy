import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KITCHEN_TABLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;shadow=0;direction=west;',
  _width: 1,
  _height: 140,
}

export function KitchenTable(props: DiagramNodeProps) {
  return <Shape {...KITCHEN_TABLE} {...props} />
}
