import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWIRL_10 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#10739E;strokeColor=none;startAngle=0;endAngle=0.5;arcWidth=0.23;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  _width: 3,
  _height: 215,
}

export function Swirl10(props: DiagramNodeProps) {
  return <Shape {...SWIRL_10} {...props} />
}
