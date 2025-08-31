import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL_14 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.circularCallout2;dy=15;strokeColor=#12AAB5;labelPosition=center;align=center;fontColor=#10739E;fontStyle=1;fontSize=24;shadow=0;direction=north;',
  },
  _width: 7,
  _height: 510,
}

export function RoadmapVertical14(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_14}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_14, props)}
    />
  )
}
