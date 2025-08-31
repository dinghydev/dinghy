import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONVEYOR_VIBRATING_CLOSED = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(vibrating,_closed)2;',
  _width: 240,
  _height: 80,
}

export function ConveyorVibratingClosed(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONVEYOR_VIBRATING_CLOSED}
      {...props}
      _style={extendStyle(CONVEYOR_VIBRATING_CLOSED, props)}
    />
  )
}
