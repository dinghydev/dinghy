import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CORNER_ROUNDED_RECTANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.corner_round_rect;dx=6;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function CornerRoundedRectangle(props: DiagramNodeProps) {
  return (
    <Shape
      {...CORNER_ROUNDED_RECTANGLE}
      {...props}
      _style={extendStyle(CORNER_ROUNDED_RECTANGLE, props)}
    />
  )
}
