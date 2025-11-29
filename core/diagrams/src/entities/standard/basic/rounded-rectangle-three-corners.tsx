import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUNDED_RECTANGLE_THREE_CORNERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.three_corner_round_rect;dx=6;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function RoundedRectangleThreeCorners(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ROUNDED_RECTANGLE_THREE_CORNERS)}
    />
  )
}
