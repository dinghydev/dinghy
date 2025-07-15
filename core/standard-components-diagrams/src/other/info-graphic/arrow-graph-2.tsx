import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_GRAPH_2 = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=top;shape=mxgraph.arrows2.arrow;dy=0.4;dx=60;direction=north;notch=0;strokeColor=#FFFFFF;strokeWidth=6;fillColor=#F2931E;fontSize=14;labelPosition=center;verticalLabelPosition=bottom;fontStyle=1',
  _width: 1,
  _height: 200,
}

export function ArrowGraph2(props: DiagramNodeProps) {
  return <Shape {...ARROW_GRAPH_2} {...props} />
}
