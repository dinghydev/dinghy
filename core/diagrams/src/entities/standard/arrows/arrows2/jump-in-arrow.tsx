import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JUMP_IN_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.jumpInArrow;dy=15;dx=38;arrowHead=55;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function JumpInArrow(props: NodeProps) {
  return (
    <Shape
      {...JUMP_IN_ARROW}
      {...props}
      _style={extendStyle(JUMP_IN_ARROW, props)}
    />
  )
}
