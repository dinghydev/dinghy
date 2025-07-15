import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWIRL_15 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#10739E;strokeColor=none;startAngle=0.5;endAngle=0.00001;arcWidth=0.43;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  _width: 8,
  _height: 215,
}

export function Swirl15(props: DiagramNodeProps) {
  return <Shape {...SWIRL_15} {...props} />
}
