import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINK_DOUBLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sink_double2;',
  _width: 80,
  _height: 35,
}

export function SinkDouble(props: DiagramNodeProps) {
  return <Shape {...SINK_DOUBLE} {...props} />
}
