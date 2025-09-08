import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUNDED_RECTANGLE_THREE_CORNERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.three_corner_round_rect;dx=6;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function RoundedRectangleThreeCorners(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUNDED_RECTANGLE_THREE_CORNERS}
      {...props}
      _style={extendStyle(ROUNDED_RECTANGLE_THREE_CORNERS, props)}
    />
  )
}
