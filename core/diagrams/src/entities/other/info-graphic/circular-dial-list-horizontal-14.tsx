import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_14 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;fillColor=none;strokeColor=none;fontSize=15;fontColor=#23445D;align=center;fontStyle=1;',
  },
  _width: 8,
  _height: 260,
}

export function CircularDialListHorizontal14(props: NodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_14}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_14, props)}
    />
  )
}
