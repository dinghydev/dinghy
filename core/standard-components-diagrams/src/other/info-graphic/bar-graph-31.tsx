import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAR_GRAPH_31 = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=#10739E;strokeWidth=6;fontSize=16;align=center;fontStyle=1',
  _width: 5,
  _height: 115,
}

export function BarGraph31(props: DiagramNodeProps) {
  return <Shape {...BAR_GRAPH_31} {...props} />
}
