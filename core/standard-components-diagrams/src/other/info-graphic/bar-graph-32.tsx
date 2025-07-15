import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAR_GRAPH_32 = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=#F2931E;strokeWidth=6;fontSize=16;align=center;fontStyle=1',
  _width: 6,
  _height: 115,
}

export function BarGraph32(props: DiagramNodeProps) {
  return <Shape {...BAR_GRAPH_32} {...props} />
}
