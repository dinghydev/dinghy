import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELLIPSE_WITH_HORIZONTAL_DIVIDER = {
  _style:
    'shape=lineEllipse;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  _width: 60,
  _height: 60,
}

export function EllipseWithHorizontalDivider(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELLIPSE_WITH_HORIZONTAL_DIVIDER}
      {...props}
      _style={extendStyle(ELLIPSE_WITH_HORIZONTAL_DIVIDER, props)}
    />
  )
}
