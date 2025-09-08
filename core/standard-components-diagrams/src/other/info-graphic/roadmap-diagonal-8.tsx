import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_8 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#AE4132;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#AE4132;shadow=1;',
  },
  _original_width: 7,
  _original_height: 330,
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
