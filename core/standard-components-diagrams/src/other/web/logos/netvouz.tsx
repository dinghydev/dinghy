import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETVOUZ = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.netvouz',
  _width: 57.2,
  _height: 57.400000000000006,
}

export function Netvouz(props: DiagramNodeProps) {
  return <Shape {...NETVOUZ} {...props} _style={extendStyle(NETVOUZ, props)} />
}
