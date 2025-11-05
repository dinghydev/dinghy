import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_10 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;whiteSpace=wrap;shape=mxgraph.infographic.partConcEllipse;startAngle=0;endAngle=0.8;arcWidth=0.4;strokeColor=none;fillColor=#12AAB5;fontSize=22;fontColor=#12AAB5;align=center;fontStyle=1;',
  },
  _width: 4,
  _height: 260,
}

export function CircularDialListHorizontal10(props: NodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_10}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_10, props)}
    />
  )
}
