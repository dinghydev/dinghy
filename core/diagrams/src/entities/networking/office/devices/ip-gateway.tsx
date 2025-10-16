import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IP_GATEWAY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.ip_gateway;',
  },
  _original_width: 59,
  _original_height: 40,
}

export function IpGateway(props: DiagramNodeProps) {
  return (
    <Shape {...IP_GATEWAY} {...props} _style={extendStyle(IP_GATEWAY, props)} />
  )
}
