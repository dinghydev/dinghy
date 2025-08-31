import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECTANGLE_WITH_DIAGONAL_FILL = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.patternFillRect;fillStyle=diag;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;',
  _width: 120,
  _height: 60,
}

export function RectangleWithDiagonalFill(props: DiagramNodeProps) {
  return (
    <Shape
      {...RECTANGLE_WITH_DIAGONAL_FILL}
      {...props}
      _style={extendStyle(RECTANGLE_WITH_DIAGONAL_FILL, props)}
    />
  )
}
