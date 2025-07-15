import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELLIPSE_WITH_VERTICAL_DIVIDER = {
  _style:
    'shape=lineEllipse;line=vertical;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  _width: 80,
  _height: 80,
}

export function EllipseWithVerticalDivider(props: DiagramNodeProps) {
  return <Shape {...ELLIPSE_WITH_VERTICAL_DIVIDER} {...props} />
}
