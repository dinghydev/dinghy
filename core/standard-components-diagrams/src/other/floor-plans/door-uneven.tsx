import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOOR_UNEVEN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorUneven;dx=0.5;',
  },
  _original_width: 160,
  _original_height: 85,
}

export function DoorUneven(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_UNEVEN}
      {...props}
      _style={extendStyle(DOOR_UNEVEN, props)}
    />
  )
}
