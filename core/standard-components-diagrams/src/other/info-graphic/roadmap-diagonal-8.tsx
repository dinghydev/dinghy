import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_DIAGONAL_8 = {
  _style:
    'shape=ellipse;strokeWidth=6;strokeColor=#AE4132;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#AE4132;shadow=1;',
  _width: 7,
  _height: 330,
}

export function RoadmapDiagonal8(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL_8}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL_8, props)}
    />
  )
}
