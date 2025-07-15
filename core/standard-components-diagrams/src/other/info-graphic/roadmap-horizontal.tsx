import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_HORIZONTAL = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.25;endAngle=0.75;arcWidth=0.25;fillColor=#10739E;strokeColor=none;',
  _width: 0,
  _height: 300,
}

export function RoadmapHorizontal(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_HORIZONTAL} {...props} />
}
