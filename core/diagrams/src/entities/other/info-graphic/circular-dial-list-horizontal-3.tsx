import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#F08E81;fontSize=12;fontColor=#AE4132;align=center;fontStyle=1;',
  },
  _width: 2,
  _height: 100,
}

export function CircularDialListHorizontal3(props: NodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_3}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_3, props)}
    />
  )
}
