import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIAGONAL_ROUNDED_RECTANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.diag_round_rect;dx=6;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function DiagonalRoundedRectangle(props: NodeProps) {
  return (
    <Shape
      {...DIAGONAL_ROUNDED_RECTANGLE}
      {...props}
      _style={extendStyle(DIAGONAL_ROUNDED_RECTANGLE, props)}
    />
  )
}
