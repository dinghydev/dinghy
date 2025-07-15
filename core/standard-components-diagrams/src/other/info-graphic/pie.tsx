import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PIE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.pie;fillColor=#10739E;strokeColor=none;startAngle=0.2;endAngle=0.9;',
  _width: 100,
  _height: 100,
}

export function Pie(props: DiagramNodeProps) {
  return <Shape {...PIE} {...props} />
}
