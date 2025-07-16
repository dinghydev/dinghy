import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_DIAGONAL_6 = {
  _style:
    'shape=ellipse;strokeWidth=6;strokeColor=#10739E;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#10739E;shadow=1;',
  _width: 5,
  _height: 330,
}

export function RoadmapDiagonal6(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_DIAGONAL_6} {...props} />
}
