import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JUMP_IN_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.jumpInArrow;dy=15;dx=38;arrowHead=55;',
  _width: 100,
  _height: 100,
}

export function JumpInArrow(props: DiagramNodeProps) {
  return <Shape {...JUMP_IN_ARROW} {...props} />
}
