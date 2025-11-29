import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_APPLICATION_FIREWALL_POLICIES_WAF = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Web_Application_Firewall_Policies_WAF.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function WebApplicationFirewallPoliciesWaf(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, WEB_APPLICATION_FIREWALL_POLICIES_WAF)}
    />
  )
}
