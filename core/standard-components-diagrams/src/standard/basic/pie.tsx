import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.pie;startAngle=0.2;endAngle=0.9;',
  _width: 60,
  _height: 60,
}

export function Pie(props: DiagramNodeProps) {
  return <Shape {...PIE} {...props} _style={extendStyle(PIE, props)} />
}
