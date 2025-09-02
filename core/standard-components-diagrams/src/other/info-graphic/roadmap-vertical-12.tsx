import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL_12 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.circularCallout2;dy=15;strokeColor=#AE4132;labelPosition=center;align=center;fontColor=#10739E;fontStyle=1;fontSize=24;shadow=0;direction=north;',
  },
  _original_width: 5,
  _original_height: 510,
}

export function RoadmapVertical12(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_12}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_12, props)}
    />
  )
}
