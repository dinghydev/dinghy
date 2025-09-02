import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOOR_BY_PASS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorBypass;dx=0.25;',
  },
  _original_width: 104,
  _original_height: 10,
}

export function DoorByPass(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_BY_PASS}
      {...props}
      _style={extendStyle(DOOR_BY_PASS, props)}
    />
  )
}
