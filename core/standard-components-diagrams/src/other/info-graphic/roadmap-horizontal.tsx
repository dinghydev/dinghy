import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.25;endAngle=0.75;arcWidth=0.25;fillColor=#10739E;strokeColor=none;',
  },
  _original_width: 0,
  _original_height: 300,
}

export function RoadmapHorizontal(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL, props)}
    />
  )
}
