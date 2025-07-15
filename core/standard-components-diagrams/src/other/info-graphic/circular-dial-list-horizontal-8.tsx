import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_8 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;whiteSpace=wrap;shape=mxgraph.infographic.partConcEllipse;startAngle=0;endAngle=0.25;arcWidth=0.4;strokeColor=none;fillColor=#AE4132;fontSize=22;fontColor=#AE4132;align=center;fontStyle=1;',
  _width: 2,
  _height: 260,
}

export function CircularDialListHorizontal8(props: DiagramNodeProps) {
  return <Shape {...CIRCULAR_DIAL_LIST_HORIZONTAL_8} {...props} />
}
