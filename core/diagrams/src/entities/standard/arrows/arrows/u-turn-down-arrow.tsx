import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const U_TURN_DOWN_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.u_turn_down_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 62,
}

export function UTurnDownArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...U_TURN_DOWN_ARROW}
      {...props}
      _style={extendStyle(U_TURN_DOWN_ARROW, props)}
    />
  )
}
