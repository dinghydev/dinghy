import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOOR_OPPOSING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorOpposing;dx=0.5;',
  },
  _width: 160,
  _height: 165,
}

export function DoorOpposing(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_OPPOSING}
      {...props}
      _style={extendStyle(DOOR_OPPOSING, props)}
    />
  )
}
