import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SLENDER_TWO_WAY_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.twoWayArrow;dy=0.65;dx=22;',
  _width: 100,
  _height: 60,
}

export function SlenderTwoWayArrow(props: DiagramNodeProps) {
  return <Shape {...SLENDER_TWO_WAY_ARROW} {...props} />
}
