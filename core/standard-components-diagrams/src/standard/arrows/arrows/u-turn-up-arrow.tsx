import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const U_TURN_UP_ARROW = {
  _style:
    'shape=mxgraph.arrows.u_turn_up_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 62,
}

export function UTurnUpArrow(props: DiagramNodeProps) {
  return <Shape {...U_TURN_UP_ARROW} {...props} />
}
