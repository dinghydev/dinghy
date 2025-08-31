import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_DIAGONAL_3 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.75;endAngle=0.5;arcWidth=0.25;fillColor=#AE4132;strokeColor=none;shadow=0;',
  _width: 2,
  _height: 330,
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
