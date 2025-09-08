import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RECTANGLE_WITH_DIAGONAL_GRID_FILL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.patternFillRect;fillStyle=diagGrid;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function RectangleWithDiagonalGridFill(props: DiagramNodeProps) {
  return (
    <Shape
      {...RECTANGLE_WITH_DIAGONAL_GRID_FILL}
      {...props}
      _style={extendStyle(RECTANGLE_WITH_DIAGONAL_GRID_FILL, props)}
    />
  )
}
