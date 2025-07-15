import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTIAL_CONCENTRIC_ELLIPSE_2 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.partConcEllipse;fillColor=#10739E;strokeColor=none;startAngle=0;endAngle=0.75;arcWidth=0.4;fontSize=20;fontColor=#10739E;align=center;fontStyle=1;',
  _width: 100,
  _height: 100,
}

export function PartialConcentricEllipse2(props: DiagramNodeProps) {
  return <Shape {...PARTIAL_CONCENTRIC_ELLIPSE_2} {...props} />
}
