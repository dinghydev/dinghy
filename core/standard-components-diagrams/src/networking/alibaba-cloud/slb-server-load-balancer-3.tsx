import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLB_SERVER_LOAD_BALANCER_3 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.slb_server_load_balancer_03;',
  },
  _width: 50.099999999999994,
  _height: 42.599999999999994,
}

export function SlbServerLoadBalancer3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLB_SERVER_LOAD_BALANCER_3}
      {...props}
      _style={extendStyle(SLB_SERVER_LOAD_BALANCER_3, props)}
    />
  )
}
