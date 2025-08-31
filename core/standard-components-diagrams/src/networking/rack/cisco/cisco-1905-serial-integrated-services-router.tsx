import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_1905_SERIAL_INTEGRATED_SERVICES_ROUTER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_1905_serial_integrated_services_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function Cisco1905SerialIntegratedServicesRouter(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_1905_SERIAL_INTEGRATED_SERVICES_ROUTER}
      {...props}
      _style={extendStyle(CISCO_1905_SERIAL_INTEGRATED_SERVICES_ROUTER, props)}
    />
  )
}
