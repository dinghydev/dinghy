import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINK_1 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sink_1;',
  },
  _width: 40,
  _height: 35,
}

export function Sink1(props: DiagramNodeProps) {
  return <Shape {...SINK_1} {...props} _style={extendStyle(SINK_1, props)} />
}
