import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOX_TRUCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.box_truck;',
  },
  _original_width: 120,
  _original_height: 80,
}

export function BoxTruck(props: DiagramNodeProps) {
  return (
    <Shape {...BOX_TRUCK} {...props} _style={extendStyle(BOX_TRUCK, props)} />
  )
}
