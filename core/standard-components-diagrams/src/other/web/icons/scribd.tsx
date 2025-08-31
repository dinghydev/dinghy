import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCRIBD = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.scribd;fillColor=#1D637D;gradientColor=#071920',
  _width: 102.4,
  _height: 102.4,
}

export function Scribd(props: DiagramNodeProps) {
  return <Shape {...SCRIBD} {...props} _style={extendStyle(SCRIBD, props)} />
}
