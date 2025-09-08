import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_7 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;whiteSpace=wrap;shape=mxgraph.infographic.partConcEllipse;startAngle=0;endAngle=0.4;arcWidth=0.4;strokeColor=none;fillColor=#F2931E;fontSize=22;fontColor=#F2931E;align=center;fontStyle=1;',
  },
  _original_width: 1,
  _original_height: 260,
}

export function CircularDialListHorizontal7(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_7}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_7, props)}
    />
  )
}
