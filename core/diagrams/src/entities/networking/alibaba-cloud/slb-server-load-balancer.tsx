import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SLB_SERVER_LOAD_BALANCER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.slb_server_load_balancer_01;',
  },
  _original_width: 47.400000000000006,
  _original_height: 40.2,
}

export function SlbServerLoadBalancer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SLB_SERVER_LOAD_BALANCER)} />
  )
}
