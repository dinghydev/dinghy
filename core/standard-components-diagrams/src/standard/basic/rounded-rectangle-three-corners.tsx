import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUNDED_RECTANGLE_THREE_CORNERS = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.three_corner_round_rect;dx=6;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
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
