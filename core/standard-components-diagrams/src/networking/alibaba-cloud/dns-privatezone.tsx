import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DNS_PRIVATEZONE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dns_privatezone_01;',
  _width: 55.800000000000004,
  _height: 54.900000000000006,
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
