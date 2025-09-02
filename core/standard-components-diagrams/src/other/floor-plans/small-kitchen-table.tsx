import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMALL_KITCHEN_TABLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;shadow=0;',
  },
  _original_width: 0,
  _original_height: 120,
}

export function SmallKitchenTable(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMALL_KITCHEN_TABLE}
      {...props}
      _style={extendStyle(SMALL_KITCHEN_TABLE, props)}
    />
  )
}
