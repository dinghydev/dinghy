import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const U_TURN_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.u_turn_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 98,
}

export function UTurnArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...U_TURN_ARROW}
      {...props}
      _style={extendStyle(U_TURN_ARROW, props)}
    />
  )
}
