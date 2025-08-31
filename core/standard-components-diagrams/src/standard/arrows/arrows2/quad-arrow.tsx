import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUAD_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.quadArrow;dy=10;dx=20;notch=24;arrowHead=10;',
  _width: 60,
  _height: 60,
}

export function QuadArrow(props: DiagramNodeProps) {
  return (
    <Shape {...QUAD_ARROW} {...props} _style={extendStyle(QUAD_ARROW, props)} />
  )
}
