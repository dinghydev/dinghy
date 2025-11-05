import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const U_TURN_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.uTurnArrow;dy=11;arrowHead=43;dx2=25;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function UTurnArrow(props: NodeProps) {
  return (
    <Shape
      {...U_TURN_ARROW}
      {...props}
      _style={extendStyle(U_TURN_ARROW, props)}
    />
  )
}
