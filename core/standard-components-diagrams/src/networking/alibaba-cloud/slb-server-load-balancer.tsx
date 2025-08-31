import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLB_SERVER_LOAD_BALANCER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.slb_server_load_balancer_01;',
  },
  _width: 47.400000000000006,
  _height: 40.2,
}

export function SlbServerLoadBalancer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLB_SERVER_LOAD_BALANCER}
      {...props}
      _style={extendStyle(SLB_SERVER_LOAD_BALANCER, props)}
    />
  )
}
