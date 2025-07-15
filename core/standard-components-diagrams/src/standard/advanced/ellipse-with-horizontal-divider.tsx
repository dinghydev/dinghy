import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELLIPSE_WITH_HORIZONTAL_DIVIDER = {
  _style:
    'shape=lineEllipse;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  _width: 80,
  _height: 80,
}

export function EllipseWithHorizontalDivider(props: DiagramNodeProps) {
  return <Shape {...ELLIPSE_WITH_HORIZONTAL_DIVIDER} {...props} />
}
