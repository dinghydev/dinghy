import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_IDENTITY_SERVICES_ENGINE = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_identity_services_engine;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
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
