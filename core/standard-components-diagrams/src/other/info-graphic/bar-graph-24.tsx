import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAR_GRAPH_24 = {
  _style:
    'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#23445D;fontSize=12;shadow=0;align=left;opacity=70;',
  _width: 8,
  _height: 120,
}

export function BarGraph24(props: DiagramNodeProps) {
  return <Shape {...BAR_GRAPH_24} {...props} />
}
