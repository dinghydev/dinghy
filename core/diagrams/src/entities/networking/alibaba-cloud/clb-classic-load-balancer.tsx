import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLB_CLASSIC_LOAD_BALANCER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.clb_classic_load_balancer_01;',
  },
  _original_width: 47.400000000000006,
  _original_height: 40.2,
}

export function ClbClassicLoadBalancer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLB_CLASSIC_LOAD_BALANCER}
      {...props}
      _style={extendStyle(CLB_CLASSIC_LOAD_BALANCER, props)}
    />
  )
}
