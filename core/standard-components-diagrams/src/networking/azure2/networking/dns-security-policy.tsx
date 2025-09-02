import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DNS_SECURITY_POLICY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DNS_Security_Policy.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DnsSecurityPolicy(props: DiagramNodeProps) {
  return (
    <Shape
      {...DNS_SECURITY_POLICY}
      {...props}
      _style={extendStyle(DNS_SECURITY_POLICY, props)}
    />
  )
}
