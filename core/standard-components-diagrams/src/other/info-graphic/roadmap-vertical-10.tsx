import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_VERTICAL_10 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.circularCallout2;dy=15;strokeColor=#10739E;labelPosition=center;align=center;fontColor=#10739E;fontStyle=1;fontSize=24;shadow=0;direction=north;',
  _width: 3,
  _height: 510,
}

export function RoadmapVertical10(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_VERTICAL_10} {...props} />
}
