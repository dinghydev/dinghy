import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALB_APPLICATION_LOAD_BALANCER_2 = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.alb_application_load_balancer_02;',
  _width: 60,
  _height: 60,
}

export function AlbApplicationLoadBalancer2(props: DiagramNodeProps) {
  return <Shape {...ALB_APPLICATION_LOAD_BALANCER_2} {...props} />
}
