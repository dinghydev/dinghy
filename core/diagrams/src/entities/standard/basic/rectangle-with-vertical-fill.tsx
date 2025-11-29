import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RECTANGLE_WITH_VERTICAL_FILL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.patternFillRect;fillStyle=vert;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;',
  },
  _width: 120,
  _height: 60,
}

export function RectangleWithVerticalFill(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, RECTANGLE_WITH_VERTICAL_FILL)}
    />
  )
}
