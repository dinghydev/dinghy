import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIAD_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.triadArrow;dy=10;dx=20;arrowHead=40;',
  _width: 100,
  _height: 70,
}

export function TriadArrow(props: DiagramNodeProps) {
  return <Shape {...TRIAD_ARROW} {...props} />
}
