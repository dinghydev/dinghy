import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIFT = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.lift;',
  _width: 60,
  _height: 60,
}

export function Lift(props: DiagramNodeProps) {
  return <Shape {...LIFT} {...props} _style={extendStyle(LIFT, props)} />
}
