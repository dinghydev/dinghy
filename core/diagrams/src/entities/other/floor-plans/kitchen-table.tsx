import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KITCHEN_TABLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;shadow=0;direction=west;',
  },
  _width: 1,
  _height: 140,
}

export function KitchenTable(props: DiagramNodeProps) {
  return (
    <Shape
      {...KITCHEN_TABLE}
      {...props}
      _style={extendStyle(KITCHEN_TABLE, props)}
    />
  )
}
