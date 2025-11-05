import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_13 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;fillColor=none;strokeColor=none;fontSize=15;fontColor=#AE4132;align=center;fontStyle=1;',
  },
  _width: 7,
  _height: 260,
}

export function CircularDialListHorizontal13(props: NodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_13}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_13, props)}
    />
  )
}
