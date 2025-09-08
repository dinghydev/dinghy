import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#F8C382;fontSize=12;fontColor=#F2931E;align=center;fontStyle=1;',
  },
  _original_width: 1,
  _original_height: 100,
}

export function CircularDialListHorizontal2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_2}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_2, props)}
    />
  )
}
