import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IP_GATEWAY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.ip_gateway;',
  _width: 59,
  _height: 40,
}

export function IpGateway(props: DiagramNodeProps) {
  return (
    <Shape {...IP_GATEWAY} {...props} _style={extendStyle(IP_GATEWAY, props)} />
  )
}
