import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DNS_DOMAIN_NAME_SYSTEM = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dns_domain_name_system;',
  },
  _original_width: 55.800000000000004,
  _original_height: 54.900000000000006,
}

export function DnsDomainNameSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...DNS_DOMAIN_NAME_SYSTEM}
      {...props}
      _style={extendStyle(DNS_DOMAIN_NAME_SYSTEM, props)}
    />
  )
}
