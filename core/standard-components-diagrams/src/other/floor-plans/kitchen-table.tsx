import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KITCHEN_TABLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;shadow=0;direction=west;',
  },
  _original_width: 1,
  _original_height: 140,
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
