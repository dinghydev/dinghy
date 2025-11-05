import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR_POCKET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorPocket;dx=0.5;',
  },
  _width: 104,
  _height: 10,
}

export function DoorPocket(props: NodeProps) {
  return (
    <Shape
      {...DOOR_POCKET}
      {...props}
      _style={extendStyle(DOOR_POCKET, props)}
    />
  )
}
