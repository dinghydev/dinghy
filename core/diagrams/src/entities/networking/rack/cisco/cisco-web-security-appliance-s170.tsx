import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_WEB_SECURITY_APPLIANCE_S170 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_web_security_appliance_s170;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function CiscoWebSecurityApplianceS170(props: NodeProps) {
  return (
    <Shape
      {...CISCO_WEB_SECURITY_APPLIANCE_S170}
      {...props}
      _style={extendStyle(CISCO_WEB_SECURITY_APPLIANCE_S170, props)}
    />
  )
}
