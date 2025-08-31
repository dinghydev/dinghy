import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DHCP_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.dhcp_server;',
  _width: 76,
  _height: 90,
}

export function DhcpServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DHCP_SERVER}
      {...props}
      _style={extendStyle(DHCP_SERVER, props)}
    />
  )
}
