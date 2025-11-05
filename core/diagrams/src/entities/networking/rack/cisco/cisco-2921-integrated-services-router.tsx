import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_2921_INTEGRATED_SERVICES_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_2921_integrated_services_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 45,
}

export function Cisco2921IntegratedServicesRouter(props: NodeProps) {
  return (
    <Shape
      {...CISCO_2921_INTEGRATED_SERVICES_ROUTER}
      {...props}
      _style={extendStyle(CISCO_2921_INTEGRATED_SERVICES_ROUTER, props)}
    />
  )
}
