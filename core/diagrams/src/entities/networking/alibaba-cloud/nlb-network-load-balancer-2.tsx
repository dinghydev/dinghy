import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NLB_NETWORK_LOAD_BALANCER_2 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlb_network_load_balancer_02;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function NlbNetworkLoadBalancer2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, NLB_NETWORK_LOAD_BALANCER_2)}
    />
  )
}
