import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONVEYOR_VIBRATING_CLOSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(vibrating,_closed)2;',
  },
  _width: 240,
  _height: 80,
}

export function ConveyorVibratingClosed(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CONVEYOR_VIBRATING_CLOSED)} />
  )
}
