import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAR_GRAPH_19 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#23445D;strokeColor=none;fontStyle=1;fontColor=#23445D;fontSize=12;shadow=0;',
  _width: 3,
  _height: 120,
}

export function BarGraph19(props: DiagramNodeProps) {
  return <Shape {...BAR_GRAPH_19} {...props} />
}
