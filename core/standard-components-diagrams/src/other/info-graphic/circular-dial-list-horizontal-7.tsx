import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_7 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;whiteSpace=wrap;shape=mxgraph.infographic.partConcEllipse;startAngle=0;endAngle=0.4;arcWidth=0.4;strokeColor=none;fillColor=#F2931E;fontSize=22;fontColor=#F2931E;align=center;fontStyle=1;',
  _width: 1,
  _height: 260,
}

export function CircularDialListHorizontal7(props: DiagramNodeProps) {
  return <Shape {...CIRCULAR_DIAL_LIST_HORIZONTAL_7} {...props} />
}
