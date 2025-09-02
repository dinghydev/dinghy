import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOOR_OVERHEAD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorOverhead;',
  },
  _original_width: 104,
  _original_height: 30,
}

export function DoorOverhead(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_OVERHEAD}
      {...props}
      _style={extendStyle(DOOR_OVERHEAD, props)}
    />
  )
}
