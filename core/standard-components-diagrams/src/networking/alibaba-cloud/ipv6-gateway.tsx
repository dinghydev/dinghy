import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPV6_GATEWAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ipv6_gateway;',
  },
  _width: 51.9,
  _height: 60,
}

export function Ipv6Gateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...IPV6_GATEWAY}
      {...props}
      _style={extendStyle(IPV6_GATEWAY, props)}
    />
  )
}
