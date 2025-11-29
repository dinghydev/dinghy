import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINK_1 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sink_1;',
  },
  _width: 40,
  _height: 35,
}

export function Sink1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SINK_1)} />
}
