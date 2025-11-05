import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DHCP_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.dhcp_server;',
  },
  _original_width: 76,
  _original_height: 90,
}

export function DhcpServer(props: NodeProps) {
  return (
    <Shape
      {...DHCP_SERVER}
      {...props}
      _style={extendStyle(DHCP_SERVER, props)}
    />
  )
}
