import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#61C6CE;fontSize=12;fontColor=#12AAB5;align=center;fontStyle=1;',
  },
  _width: 4,
  _height: 100,
}

export function CircularDialListHorizontal5(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_5}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_5, props)}
    />
  )
}
