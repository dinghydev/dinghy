import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_6 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;whiteSpace=wrap;shape=mxgraph.infographic.partConcEllipse;startAngle=0;endAngle=0.65;arcWidth=0.4;strokeColor=none;fillColor=#10739E;fontSize=22;fontColor=#10739E;align=center;fontStyle=1;',
  },
  _width: 0,
  _height: 260,
}

export function CircularDialListHorizontal6(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_6}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_6, props)}
    />
  )
}
