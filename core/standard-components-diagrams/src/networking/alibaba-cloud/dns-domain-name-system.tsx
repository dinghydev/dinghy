import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DNS_DOMAIN_NAME_SYSTEM = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dns_domain_name_system;',
  _width: 55.800000000000004,
  _height: 54.900000000000006,
}

export function DnsDomainNameSystem(props: DiagramNodeProps) {
  return <Shape {...DNS_DOMAIN_NAME_SYSTEM} {...props} />
}
