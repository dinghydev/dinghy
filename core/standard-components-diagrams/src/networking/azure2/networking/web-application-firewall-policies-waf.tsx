import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_APPLICATION_FIREWALL_POLICIES_WAF = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Web_Application_Firewall_Policies_WAF.svg;',
  _width: 68,
  _height: 68,
}

export function WebApplicationFirewallPoliciesWaf(props: DiagramNodeProps) {
  return <Shape {...WEB_APPLICATION_FIREWALL_POLICIES_WAF} {...props} />
}
