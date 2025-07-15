import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STRIPED_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.stripedArrow;dy=0.6;dx=40;notch=25;',
  _width: 100,
  _height: 70,
}

export function StripedArrow(props: DiagramNodeProps) {
  return <Shape {...STRIPED_ARROW} {...props} />
}
