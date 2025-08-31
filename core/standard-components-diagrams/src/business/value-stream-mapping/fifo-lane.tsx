import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIFO_LANE = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.fifo_lane;overflow=fill;verticalAlign=top;align=center;',
  _width: 100,
  _height: 50,
}

export function FifoLane(props: DiagramNodeProps) {
  return (
    <Shape {...FIFO_LANE} {...props} _style={extendStyle(FIFO_LANE, props)} />
  )
}
