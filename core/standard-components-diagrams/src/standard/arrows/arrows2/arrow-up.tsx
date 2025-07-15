import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_UP = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;direction=north;notch=0;',
  _width: 70,
  _height: 100,
}

export function ArrowUp(props: DiagramNodeProps) {
  return <Shape {...ARROW_UP} {...props} />
}
