import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_2901_INTEGRATED_SERVICES_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_2901_integrated_services_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function Cisco2901IntegratedServicesRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_2901_INTEGRATED_SERVICES_ROUTER}
      {...props}
      _style={extendStyle(CISCO_2901_INTEGRATED_SERVICES_ROUTER, props)}
    />
  )
}
