import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_LOAD_BALANCER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.application_load_balancer;fillColor=#F58536;gradientColor=none;',
  _width: 69,
  _height: 72,
}

export function ApplicationLoadBalancer(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_LOAD_BALANCER} {...props} />
}
