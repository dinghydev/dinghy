import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_BALANCER = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.load_balancer;network2IconW=0.86;network2IconH=0.76;',
  _width: 43,
  _height: 38,
}

export function LoadBalancer(props: DiagramNodeProps) {
  return <Shape {...LOAD_BALANCER} {...props} />
}
