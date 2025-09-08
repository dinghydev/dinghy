import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_10 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#12AAB5;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#12AAB5;shadow=1;',
  },
  _original_width: 9,
  _original_height: 330,
}

export function RoadmapDiagonal10(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL_10}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL_10, props)}
    />
  )
}
