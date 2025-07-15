import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELBOW_BUS_2 = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.bendArrow;dy=15;dx=38;notch=0;arrowHead=55;rounded=0;strokeWidth=1;flipH=1;',
  _width: 130,
  _height: 130,
}

export function ElbowBus2(props: DiagramNodeProps) {
  return <Shape {...ELBOW_BUS_2} {...props} />
}
