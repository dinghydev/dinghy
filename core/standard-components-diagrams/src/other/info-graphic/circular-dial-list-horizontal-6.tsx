import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_6 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;whiteSpace=wrap;shape=mxgraph.infographic.partConcEllipse;startAngle=0;endAngle=0.65;arcWidth=0.4;strokeColor=none;fillColor=#10739E;fontSize=22;fontColor=#10739E;align=center;fontStyle=1;',
  _width: 0,
  _height: 260,
}

export function CircularDialListHorizontal6(props: DiagramNodeProps) {
  return <Shape {...CIRCULAR_DIAL_LIST_HORIZONTAL_6} {...props} />
}
