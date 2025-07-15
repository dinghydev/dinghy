import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;startAngle=0.3;endAngle=0.1;',
  _width: 100,
  _height: 100,
}

export function Arc(props: DiagramNodeProps) {
  return <Shape {...ARC} {...props} />
}
