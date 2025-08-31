import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_IDENTITY_SERVICES_ENGINE = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_identity_services_engine;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoIdentityServicesEngine(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_IDENTITY_SERVICES_ENGINE}
      {...props}
      _style={extendStyle(CISCO_IDENTITY_SERVICES_ENGINE, props)}
    />
  )
}
