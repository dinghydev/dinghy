import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DNS_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.dns_server;',
  },
  _original_width: 76.5,
  _original_height: 92.5,
}

export function DnsServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DNS_SERVER)} />
}
