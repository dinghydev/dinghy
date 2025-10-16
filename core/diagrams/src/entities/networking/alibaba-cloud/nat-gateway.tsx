import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAT_GATEWAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nat_gateway;',
  },
  _original_width: 51.6,
  _original_height: 41.699999999999996,
}

export function NatGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAT_GATEWAY}
      {...props}
      _style={extendStyle(NAT_GATEWAY, props)}
    />
  )
}
