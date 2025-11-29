import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SMALL_KITCHEN_TABLE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;shadow=0;rotation=180;',
  },
  _width: 1,
  _height: 120,
}

export function SmallKitchenTable2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SMALL_KITCHEN_TABLE_2)} />
}
