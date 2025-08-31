import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONVEYOR_CHAIN_CLOSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(chain,_closed);',
  },
  _width: 240,
  _height: 80,
}

export function ConveyorChainClosed(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONVEYOR_CHAIN_CLOSED}
      {...props}
      _style={extendStyle(CONVEYOR_CHAIN_CLOSED, props)}
    />
  )
}
