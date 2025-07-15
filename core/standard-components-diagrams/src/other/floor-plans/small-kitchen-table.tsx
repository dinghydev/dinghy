import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMALL_KITCHEN_TABLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;shadow=0;',
  _width: 0,
  _height: 120,
}

export function SmallKitchenTable(props: DiagramNodeProps) {
  return <Shape {...SMALL_KITCHEN_TABLE} {...props} />
}
