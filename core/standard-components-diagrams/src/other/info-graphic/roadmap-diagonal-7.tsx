import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_DIAGONAL_7 = {
  _style:
    'shape=ellipse;strokeWidth=6;strokeColor=#F2931E;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#F2931E;shadow=1;',
  _width: 6,
  _height: 330,
}

export function RoadmapDiagonal7(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_DIAGONAL_7} {...props} />
}
