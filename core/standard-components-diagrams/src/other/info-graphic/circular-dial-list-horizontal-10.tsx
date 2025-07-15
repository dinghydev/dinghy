import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_10 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;whiteSpace=wrap;shape=mxgraph.infographic.partConcEllipse;startAngle=0;endAngle=0.8;arcWidth=0.4;strokeColor=none;fillColor=#12AAB5;fontSize=22;fontColor=#12AAB5;align=center;fontStyle=1;',
  _width: 4,
  _height: 260,
}

export function CircularDialListHorizontal10(props: DiagramNodeProps) {
  return <Shape {...CIRCULAR_DIAL_LIST_HORIZONTAL_10} {...props} />
}
