import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOX_TRUCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.box_truck;',
  },
  _width: 120,
  _height: 80,
}

export function BoxTruck(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BOX_TRUCK)} />
}
