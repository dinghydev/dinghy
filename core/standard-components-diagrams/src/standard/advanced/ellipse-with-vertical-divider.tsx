import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELLIPSE_WITH_VERTICAL_DIVIDER = {
  _style:
    'shape=lineEllipse;line=vertical;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  _width: 60,
  _height: 60,
}

export function EllipseWithVerticalDivider(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELLIPSE_WITH_VERTICAL_DIVIDER}
      {...props}
      _style={extendStyle(ELLIPSE_WITH_VERTICAL_DIVIDER, props)}
    />
  )
}
