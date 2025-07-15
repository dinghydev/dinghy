import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAR_GRAPH_8 = {
  _style:
    'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#D82A23;fontSize=12;shadow=0;align=left;opacity=70;',
  _width: 7,
  _height: 120,
}

export function BarGraph8(props: DiagramNodeProps) {
  return <Shape {...BAR_GRAPH_8} {...props} />
}
