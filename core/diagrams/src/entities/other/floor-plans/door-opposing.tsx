import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR_OPPOSING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorOpposing;dx=0.5;',
  },
  _width: 160,
  _height: 165,
}

export function DoorOpposing(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOOR_OPPOSING)} />
}
