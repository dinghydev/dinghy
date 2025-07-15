import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_BALANCERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Load_Balancer_feature.svg;',
  _width: 50,
  _height: 50,
}

export function LoadBalancers(props: DiagramNodeProps) {
  return <Shape {...LOAD_BALANCERS} {...props} />
}
