import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINK_DOUBLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sink_double2;',
  },
  _width: 80,
  _height: 35,
}

export function SinkDouble(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SINK_DOUBLE)} />
}
