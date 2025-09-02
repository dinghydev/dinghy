import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOOR_REVOLVING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorRevolving;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 85,
}

export function DoorRevolving(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_REVOLVING}
      {...props}
      _style={extendStyle(DOOR_REVOLVING, props)}
    />
  )
}
