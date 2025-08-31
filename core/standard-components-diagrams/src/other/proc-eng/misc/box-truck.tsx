import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOX_TRUCK = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.box_truck;',
  _width: 120,
  _height: 80,
}

export function BoxTruck(props: DiagramNodeProps) {
  return (
    <Shape {...BOX_TRUCK} {...props} _style={extendStyle(BOX_TRUCK, props)} />
  )
}
