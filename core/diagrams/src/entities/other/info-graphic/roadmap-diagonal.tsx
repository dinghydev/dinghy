import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.75;endAngle=0.5;arcWidth=0.25;fillColor=#10739E;strokeColor=none;shadow=0;',
  },
  _width: 0,
  _height: 330,
}

export function RoadmapDiagonal(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL, props)}
    />
  )
}
