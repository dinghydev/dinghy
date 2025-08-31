import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETVOUZ = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.netvouz;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Netvouz(props: DiagramNodeProps) {
  return <Shape {...NETVOUZ} {...props} _style={extendStyle(NETVOUZ, props)} />
}
