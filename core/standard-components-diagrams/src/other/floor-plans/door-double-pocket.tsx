import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOOR_DOUBLE_POCKET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorDoublePocket;dx=0.25;',
  },
  _width: 104,
  _height: 10,
}

export function DoorDoublePocket(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_DOUBLE_POCKET}
      {...props}
      _style={extendStyle(DOOR_DOUBLE_POCKET, props)}
    />
  )
}
