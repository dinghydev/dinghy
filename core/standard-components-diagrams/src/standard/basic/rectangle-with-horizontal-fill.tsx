import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RECTANGLE_WITH_HORIZONTAL_FILL = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.patternFillRect;fillStyle=hor;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;',
  _width: 120,
  _height: 60,
}

export function RectangleWithHorizontalFill(props: DiagramNodeProps) {
  return <Shape {...RECTANGLE_WITH_HORIZONTAL_FILL} {...props} />
}
