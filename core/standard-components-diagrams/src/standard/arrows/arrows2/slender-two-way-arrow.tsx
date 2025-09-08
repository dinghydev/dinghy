import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLENDER_TWO_WAY_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.twoWayArrow;dy=0.65;dx=22;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function SlenderTwoWayArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLENDER_TWO_WAY_ARROW}
      {...props}
      _style={extendStyle(SLENDER_TWO_WAY_ARROW, props)}
    />
  )
}
