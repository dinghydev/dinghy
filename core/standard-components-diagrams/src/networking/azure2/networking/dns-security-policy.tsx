import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DNS_SECURITY_POLICY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DNS_Security_Policy.svg;',
  _width: 68,
  _height: 68,
}

export function DnsSecurityPolicy(props: DiagramNodeProps) {
  return <Shape {...DNS_SECURITY_POLICY} {...props} />
}
