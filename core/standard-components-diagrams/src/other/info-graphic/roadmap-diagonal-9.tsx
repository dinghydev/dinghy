import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_DIAGONAL_9 = {
  _style:
    'shape=ellipse;strokeWidth=6;strokeColor=#23445D;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#23445D;shadow=1;',
  _width: 8,
  _height: 330,
}

export function RoadmapDiagonal9(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL_9}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL_9, props)}
    />
  )
}
