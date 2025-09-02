import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_DIAGONAL_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.25;endAngle=0;arcWidth=0.25;fillColor=#F2931E;strokeColor=none;shadow=0;',
  },
  _original_width: 1,
  _original_height: 330,
}

export function RoadmapDiagonal2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL_2}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL_2, props)}
    />
  )
}
