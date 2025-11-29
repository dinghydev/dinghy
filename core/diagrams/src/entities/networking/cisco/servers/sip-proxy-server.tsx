import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIP_PROXY_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.sip_proxy_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 45,
  _height: 70,
}

export function SipProxyServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SIP_PROXY_SERVER)} />
}
