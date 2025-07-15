import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAR_GRAPH_12 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#23445D;strokeColor=none;shadow=0;',
  _width: 1,
  _height: 100,
}

export function BarGraph12(props: DiagramNodeProps) {
  return <Shape {...BAR_GRAPH_12} {...props} />
}
