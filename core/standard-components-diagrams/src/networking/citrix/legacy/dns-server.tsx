import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DNS_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.dns_server;',
  },
  _original_width: 76.5,
  _original_height: 92.5,
}

export function DnsServer(props: DiagramNodeProps) {
  return (
    <Shape {...DNS_SERVER} {...props} _style={extendStyle(DNS_SERVER, props)} />
  )
}
