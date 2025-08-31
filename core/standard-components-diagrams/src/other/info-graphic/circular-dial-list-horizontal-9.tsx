import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_9 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;whiteSpace=wrap;shape=mxgraph.infographic.partConcEllipse;startAngle=0;endAngle=0.6;arcWidth=0.4;strokeColor=none;fillColor=#23445D;fontSize=22;fontColor=#23445D;align=center;fontStyle=1;',
  _width: 3,
  _height: 260,
}

export function CircularDialListHorizontal9(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_9}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_9, props)}
    />
  )
}
