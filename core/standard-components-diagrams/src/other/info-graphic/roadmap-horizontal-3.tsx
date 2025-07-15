import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_HORIZONTAL_3 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.25;endAngle=0.75;arcWidth=0.25;fillColor=#AE4132;strokeColor=none;',
  _width: 2,
  _height: 300,
}

export function RoadmapHorizontal3(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_HORIZONTAL_3} {...props} />
}
