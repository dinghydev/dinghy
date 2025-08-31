import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DAMPER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.damper2;',
  _width: 50,
  _height: 20,
}

export function Damper(props: DiagramNodeProps) {
  return <Shape {...DAMPER} {...props} _style={extendStyle(DAMPER, props)} />
}
