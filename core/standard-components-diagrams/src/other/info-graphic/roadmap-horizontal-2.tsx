import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_HORIZONTAL_2 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.75;endAngle=0.25;arcWidth=0.25;fillColor=#F2931E;strokeColor=none;',
  _width: 1,
  _height: 300,
}

export function RoadmapHorizontal2(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_HORIZONTAL_2} {...props} />
}
