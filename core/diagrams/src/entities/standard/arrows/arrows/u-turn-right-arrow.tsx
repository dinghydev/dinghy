import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const U_TURN_RIGHT_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.u_turn_right_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 62,
  _height: 97,
}

export function UTurnRightArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...U_TURN_RIGHT_ARROW}
      {...props}
      _style={extendStyle(U_TURN_RIGHT_ARROW, props)}
    />
  )
}
