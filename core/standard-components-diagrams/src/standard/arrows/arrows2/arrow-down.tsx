import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_DOWN = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;direction=south;notch=0;',
  _width: 70,
  _height: 100,
}

export function ArrowDown(props: DiagramNodeProps) {
  return <Shape {...ARROW_DOWN} {...props} />
}
