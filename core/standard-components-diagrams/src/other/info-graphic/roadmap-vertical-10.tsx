import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_VERTICAL_10 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.circularCallout2;dy=15;strokeColor=#10739E;labelPosition=center;align=center;fontColor=#10739E;fontStyle=1;fontSize=24;shadow=0;direction=north;',
  },
  _original_width: 3,
  _original_height: 510,
}

export function RoadmapVertical10(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_10}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_10, props)}
    />
  )
}
