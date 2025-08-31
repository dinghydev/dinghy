import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLLER_CONVEYOR = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.roller_conveyor;',
  _width: 160,
  _height: 20,
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
