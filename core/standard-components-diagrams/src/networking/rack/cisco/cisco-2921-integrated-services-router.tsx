import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_2921_INTEGRATED_SERVICES_ROUTER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_2921_integrated_services_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 45,
}

export function Cisco2921IntegratedServicesRouter(props: DiagramNodeProps) {
  return <Shape {...CISCO_2921_INTEGRATED_SERVICES_ROUTER} {...props} />
}
