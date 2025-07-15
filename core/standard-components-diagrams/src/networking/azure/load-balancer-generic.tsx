import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_BALANCER_GENERIC = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.load_balancer_generic;pointerEvents=1;',
  _width: 37.5,
  _height: 50,
}

export function LoadBalancerGeneric(props: DiagramNodeProps) {
  return <Shape {...LOAD_BALANCER_GENERIC} {...props} />
}
