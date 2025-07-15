import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINK_1 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sink_1;',
  _width: 40,
  _height: 35,
}

export function Sink1(props: DiagramNodeProps) {
  return <Shape {...SINK_1} {...props} />
}
