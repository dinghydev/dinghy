import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAR_GRAPH = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#10739E;strokeColor=none;fontStyle=1;fontColor=#10739E;fontSize=12;shadow=0;',
  _width: 0,
  _height: 100,
}

export function BarGraph(props: DiagramNodeProps) {
  return <Shape {...BAR_GRAPH} {...props} />
}
