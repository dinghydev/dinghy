import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_1921_INTEGRATED_SERVICES_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_1921_integrated_services_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function Cisco1921IntegratedServicesRouter(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CISCO_1921_INTEGRATED_SERVICES_ROUTER)}
    />
  )
}
