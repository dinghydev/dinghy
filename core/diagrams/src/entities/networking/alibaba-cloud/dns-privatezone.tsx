import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DNS_PRIVATEZONE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dns_privatezone_01;',
  },
  _original_width: 55.800000000000004,
  _original_height: 54.900000000000006,
}

export function DnsPrivatezone(props: DiagramNodeProps) {
  return (
    <Shape
      {...DNS_PRIVATEZONE}
      {...props}
      _style={extendStyle(DNS_PRIVATEZONE, props)}
    />
  )
}
