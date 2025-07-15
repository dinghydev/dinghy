import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TWO_WAY_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.twoWayArrow;dy=0.6;dx=35;',
  _width: 100,
  _height: 60,
}

export function TwoWayArrow(props: DiagramNodeProps) {
  return <Shape {...TWO_WAY_ARROW} {...props} />
}
