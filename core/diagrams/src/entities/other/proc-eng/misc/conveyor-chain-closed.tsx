import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONVEYOR_CHAIN_CLOSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(chain,_closed);',
  },
  _width: 240,
  _height: 80,
}

export function ConveyorChainClosed(props: NodeProps) {
  return (
    <Shape
      {...CONVEYOR_CHAIN_CLOSED}
      {...props}
      _style={extendStyle(CONVEYOR_CHAIN_CLOSED, props)}
    />
  )
}
