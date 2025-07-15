import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_BALANCER_GENERIC = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.load_balancer_generic',
  _width: 37,
  _height: 50,
}

export function LoadBalancerGeneric(props: DiagramNodeProps) {
  return <Shape {...LOAD_BALANCER_GENERIC} {...props} />
}
