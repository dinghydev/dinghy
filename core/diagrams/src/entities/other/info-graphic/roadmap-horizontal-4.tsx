import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_4 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.75;endAngle=0.25;arcWidth=0.25;fillColor=#23445D;strokeColor=none;',
  },
  _width: 3,
  _height: 300,
}

export function RoadmapHorizontal4(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_4}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_4, props)}
    />
  )
}
