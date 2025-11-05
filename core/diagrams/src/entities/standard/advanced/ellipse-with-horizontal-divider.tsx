import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELLIPSE_WITH_HORIZONTAL_DIVIDER = {
  _style: {
    entity:
      'shape=lineEllipse;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function EllipseWithHorizontalDivider(props: NodeProps) {
  return (
    <Shape
      {...ELLIPSE_WITH_HORIZONTAL_DIVIDER}
      {...props}
      _style={extendStyle(ELLIPSE_WITH_HORIZONTAL_DIVIDER, props)}
    />
  )
}
