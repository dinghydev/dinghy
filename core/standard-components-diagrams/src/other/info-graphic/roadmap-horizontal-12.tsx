import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_HORIZONTAL_12 = {
  _style:
    'shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=10;notch=0;html=1;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;whiteSpace=wrap;',
  _width: 1,
  _height: 210,
}

export function RoadmapHorizontal12(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_HORIZONTAL_12} {...props} />
}
