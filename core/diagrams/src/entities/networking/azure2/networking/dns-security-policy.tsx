import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DNS_SECURITY_POLICY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DNS_Security_Policy.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DnsSecurityPolicy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DNS_SECURITY_POLICY)} />
}
