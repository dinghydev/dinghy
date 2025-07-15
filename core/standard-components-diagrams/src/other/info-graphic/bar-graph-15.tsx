import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAR_GRAPH_15 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#10739E;strokeColor=none;shadow=0;',
  _width: 4,
  _height: 100,
}

export function BarGraph15(props: DiagramNodeProps) {
  return <Shape {...BAR_GRAPH_15} {...props} />
}
