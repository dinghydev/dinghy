import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_DIAGONAL_4 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.25;endAngle=0;arcWidth=0.25;fillColor=#23445D;strokeColor=none;shadow=0;',
  },
  _width: 3,
  _height: 330,
}

export function RoadmapDiagonal4(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL_4}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL_4, props)}
    />
  )
}
