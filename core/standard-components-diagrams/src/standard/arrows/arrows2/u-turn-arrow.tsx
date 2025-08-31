import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const U_TURN_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.uTurnArrow;dy=11;arrowHead=43;dx2=25;',
  _width: 60,
  _height: 60,
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
