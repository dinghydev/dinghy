import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_VERTICAL_15 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.circularCallout2;dy=15;strokeColor=#56517E;labelPosition=center;align=center;fontColor=#10739E;fontStyle=1;fontSize=24;shadow=0;direction=north;flipH=1;',
  _width: 8,
  _height: 510,
}

export function RoadmapVertical15(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_VERTICAL_15} {...props} />
}
