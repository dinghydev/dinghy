import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIFO_LANE = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.fifo_lane;overflow=fill;verticalAlign=top;align=center;',
  },
  _width: 100,
  _height: 50,
}

export function FifoLane(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIFO_LANE)} />
}
