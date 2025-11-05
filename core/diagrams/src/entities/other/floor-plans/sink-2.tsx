import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINK_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sink_22;',
  },
  _width: 40,
  _height: 35,
}

export function Sink2(props: NodeProps) {
  return <Shape {...SINK_2} {...props} _style={extendStyle(SINK_2, props)} />
}
