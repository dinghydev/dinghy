import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KITCHEN_TABLE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;shadow=0;direction=north;',
  },
  _width: 2,
  _height: 140,
}

export function KitchenTable2(props: NodeProps) {
  return (
    <Shape
      {...KITCHEN_TABLE_2}
      {...props}
      _style={extendStyle(KITCHEN_TABLE_2, props)}
    />
  )
}
