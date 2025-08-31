import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL_11 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.circularCallout2;dy=15;strokeColor=#F2931E;labelPosition=center;align=center;fontColor=#F2931E;fontStyle=1;fontSize=24;shadow=0;direction=north;flipH=1;',
  _width: 4,
  _height: 510,
}

export function RoadmapVertical11(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_11}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_11, props)}
    />
  )
}
