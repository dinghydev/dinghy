import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_15 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;fillColor=none;strokeColor=none;fontSize=15;fontColor=#12AAB5;align=center;fontStyle=1;',
  },
  _width: 9,
  _height: 260,
}

export function CircularDialListHorizontal15(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CIRCULAR_DIAL_LIST_HORIZONTAL_15)}
    />
  )
}
