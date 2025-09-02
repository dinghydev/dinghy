import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLLER_CONVEYOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.roller_conveyor;',
  },
  _original_width: 160,
  _original_height: 20,
}

export function RollerConveyor(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLLER_CONVEYOR}
      {...props}
      _style={extendStyle(ROLLER_CONVEYOR, props)}
    />
  )
}
