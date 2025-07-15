import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QUAD_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.quadArrow;dy=10;dx=20;notch=24;arrowHead=10;',
  _width: 100,
  _height: 100,
}

export function QuadArrow(props: DiagramNodeProps) {
  return <Shape {...QUAD_ARROW} {...props} />
}
