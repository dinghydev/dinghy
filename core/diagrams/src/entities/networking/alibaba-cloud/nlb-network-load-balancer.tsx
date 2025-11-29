import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NLB_NETWORK_LOAD_BALANCER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlb_network_load_balancer_01;',
  },
  _original_width: 47.400000000000006,
  _original_height: 40.2,
}

export function NlbNetworkLoadBalancer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, NLB_NETWORK_LOAD_BALANCER)} />
  )
}
