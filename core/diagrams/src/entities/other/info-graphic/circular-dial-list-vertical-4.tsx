import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_VERTICAL_4 = {
  _style: {
    entity:
      'labelPosition=right;spacingLeft=10;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#5D7F99;fontSize=12;fontColor=#23445D;align=left;fontStyle=1;',
  },
  _width: 3,
  _height: 540,
}

export function CircularDialListVertical4(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CIRCULAR_DIAL_LIST_VERTICAL_4)}
    />
  )
}
