import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DNS_PRIVATEZONE_2 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dns_privatezone_02;',
  },
  _original_width: 49.8,
  _original_height: 52.2,
}

export function DnsPrivatezone2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DNS_PRIVATEZONE_2}
      {...props}
      _style={extendStyle(DNS_PRIVATEZONE_2, props)}
    />
  )
}
