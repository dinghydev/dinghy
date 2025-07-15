import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_BALANCER = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.load_balancer;',
  _width: 100,
  _height: 30,
}

export function LoadBalancer(props: DiagramNodeProps) {
  return <Shape {...LOAD_BALANCER} {...props} />
}
