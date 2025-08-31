import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;startAngle=0.3;endAngle=0.1;',
  _width: 60,
  _height: 60,
}

export function Arc(props: DiagramNodeProps) {
  return <Shape {...ARC} {...props} _style={extendStyle(ARC, props)} />
}
