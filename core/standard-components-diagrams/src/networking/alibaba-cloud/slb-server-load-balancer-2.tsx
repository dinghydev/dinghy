import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLB_SERVER_LOAD_BALANCER_2 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.slb_server_load_balancer_02;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function SlbServerLoadBalancer2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLB_SERVER_LOAD_BALANCER_2}
      {...props}
      _style={extendStyle(SLB_SERVER_LOAD_BALANCER_2, props)}
    />
  )
}
