import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONVEYOR_BELT_CLOSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(belt,_closed);',
  },
  _width: 240,
  _height: 80,
}

export function ConveyorBeltClosed(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONVEYOR_BELT_CLOSED)} />
}
