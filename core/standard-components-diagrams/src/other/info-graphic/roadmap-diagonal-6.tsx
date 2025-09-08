import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_6 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#10739E;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#10739E;shadow=1;',
  },
  _original_width: 5,
  _original_height: 330,
}

export function RoadmapDiagonal6(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL_6}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL_6, props)}
    />
  )
}
