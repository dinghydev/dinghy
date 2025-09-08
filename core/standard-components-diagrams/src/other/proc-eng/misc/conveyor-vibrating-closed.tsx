import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONVEYOR_VIBRATING_CLOSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(vibrating,_closed)2;',
  },
  _original_width: 240,
  _original_height: 80,
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
