import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIANGULAR_DIAGRAM = {
  _style:
    'triangle;whiteSpace=wrap;html=1;shadow=0;strokeColor=#FFFFFF;strokeWidth=6;fillColor=#10739E;fontSize=16;fontColor=#FFFFFF;align=center;direction=north;fontStyle=1',
  _width: 0,
  _height: 360,
}

export function TriangularDiagram(props: DiagramNodeProps) {
  return <Shape {...TRIANGULAR_DIAGRAM} {...props} />
}
