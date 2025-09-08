import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_8 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;whiteSpace=wrap;shape=mxgraph.infographic.partConcEllipse;startAngle=0;endAngle=0.25;arcWidth=0.4;strokeColor=none;fillColor=#AE4132;fontSize=22;fontColor=#AE4132;align=center;fontStyle=1;',
  },
  _original_width: 2,
  _original_height: 260,
}

export function CircularDialListHorizontal8(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_8}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_8, props)}
    />
  )
}
