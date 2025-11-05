import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.75;endAngle=0.5;arcWidth=0.25;fillColor=#12AAB5;strokeColor=none;shadow=0;',
  },
  _width: 4,
  _height: 330,
}

export function RoadmapDiagonal5(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL_5}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL_5, props)}
    />
  )
}
