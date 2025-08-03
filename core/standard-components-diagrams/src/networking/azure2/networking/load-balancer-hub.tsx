import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_BALANCER_HUB = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Load_Balancer_Hub.svg;strokeColor=none;',
  _width: 54,
  _height: 68,
}

export function LoadBalancerHub(props: DiagramNodeProps) {
  return <Shape {...LOAD_BALANCER_HUB} {...props} />
}
