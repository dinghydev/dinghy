import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NAT_GATEWAY = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nat_gateway;',
  _width: 51.6,
  _height: 41.699999999999996,
}

export function NatGateway(props: DiagramNodeProps) {
  return <Shape {...NAT_GATEWAY} {...props} />
}
