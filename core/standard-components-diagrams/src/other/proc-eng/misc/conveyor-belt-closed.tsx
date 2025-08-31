import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONVEYOR_BELT_CLOSED = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(belt,_closed);',
  _width: 240,
  _height: 80,
}

export function ConveyorBeltClosed(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONVEYOR_BELT_CLOSED}
      {...props}
      _style={extendStyle(CONVEYOR_BELT_CLOSED, props)}
    />
  )
}
