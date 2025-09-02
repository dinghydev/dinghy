import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAGONAL_SNIP_RECTANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.diag_snip_rect;dx=6;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function DiagonalSnipRectangle(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAGONAL_SNIP_RECTANGLE}
      {...props}
      _style={extendStyle(DIAGONAL_SNIP_RECTANGLE, props)}
    />
  )
}
