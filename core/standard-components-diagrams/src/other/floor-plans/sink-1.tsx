import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINK_1 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sink_1;',
  },
  _original_width: 40,
  _original_height: 35,
}

export function Sink1(props: DiagramNodeProps) {
  return <Shape {...SINK_1} {...props} _style={extendStyle(SINK_1, props)} />
}
