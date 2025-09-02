import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_WEB_SECURITY_APPLIANCE_S670 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_web_security_appliance_s670;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function CiscoWebSecurityApplianceS670(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_WEB_SECURITY_APPLIANCE_S670}
      {...props}
      _style={extendStyle(CISCO_WEB_SECURITY_APPLIANCE_S670, props)}
    />
  )
}
