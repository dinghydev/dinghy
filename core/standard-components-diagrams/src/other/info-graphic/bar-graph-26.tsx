import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAR_GRAPH_26 = {
  _style:
    'html=1;whiteSpace=wrap;shape=mxgraph.infographic.barCallout;dx=60;dy=30;fillColor=#10739E;strokeColor=none;align=center;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingTop=5;',
  _width: 0,
  _height: 115,
}

export function BarGraph26(props: DiagramNodeProps) {
  return <Shape {...BAR_GRAPH_26} {...props} />
}
