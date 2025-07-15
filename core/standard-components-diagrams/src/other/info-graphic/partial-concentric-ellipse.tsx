import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTIAL_CONCENTRIC_ELLIPSE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#10739E;strokeColor=none;startAngle=0.25;endAngle=0.1;arcWidth=0.5;',
  _width: 100,
  _height: 100,
}

export function PartialConcentricEllipse(props: DiagramNodeProps) {
  return <Shape {...PARTIAL_CONCENTRIC_ELLIPSE} {...props} />
}
