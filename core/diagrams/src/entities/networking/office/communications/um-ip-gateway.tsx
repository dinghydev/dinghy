import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UM_IP_GATEWAY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.um_ip_gateway;',
  },
  _width: 59,
  _height: 38,
}

export function UmIpGateway(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, UM_IP_GATEWAY)} />
}
