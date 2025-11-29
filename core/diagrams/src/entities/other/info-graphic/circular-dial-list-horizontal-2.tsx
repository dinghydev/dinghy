import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#F8C382;fontSize=12;fontColor=#F2931E;align=center;fontStyle=1;',
  },
  _width: 1,
  _height: 100,
}

export function CircularDialListHorizontal2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CIRCULAR_DIAL_LIST_HORIZONTAL_2)}
    />
  )
}
