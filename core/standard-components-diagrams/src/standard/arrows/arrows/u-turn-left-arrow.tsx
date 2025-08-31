import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const U_TURN_LEFT_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.u_turn_left_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 62,
  _height: 97,
}

export function UTurnLeftArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...U_TURN_LEFT_ARROW}
      {...props}
      _style={extendStyle(U_TURN_LEFT_ARROW, props)}
    />
  )
}
