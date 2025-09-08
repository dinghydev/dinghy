import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.75;endAngle=0.5;arcWidth=0.25;fillColor=#AE4132;strokeColor=none;shadow=0;',
  },
  _original_width: 2,
  _original_height: 330,
}

export function RoadmapDiagonal3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL_3}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL_3, props)}
    />
  )
}
