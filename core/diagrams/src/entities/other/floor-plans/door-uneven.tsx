import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR_UNEVEN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorUneven;dx=0.5;',
  },
  _width: 160,
  _height: 85,
}

export function DoorUneven(props: NodeProps) {
  return (
    <Shape
      {...DOOR_UNEVEN}
      {...props}
      _style={extendStyle(DOOR_UNEVEN, props)}
    />
  )
}
