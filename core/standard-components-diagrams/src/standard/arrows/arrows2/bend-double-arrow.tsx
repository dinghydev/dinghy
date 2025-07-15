import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BEND_DOUBLE_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.bendDoubleArrow;dy=15;dx=38;arrowHead=55;rounded=0;',
  _width: 100,
  _height: 100,
}

export function BendDoubleArrow(props: DiagramNodeProps) {
  return <Shape {...BEND_DOUBLE_ARROW} {...props} />
}
