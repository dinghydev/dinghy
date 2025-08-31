import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOAD_BALANCER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/vpc/LoadBalancer.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function LoadBalancer(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOAD_BALANCER}
      {...props}
      _style={extendStyle(LOAD_BALANCER, props)}
    />
  )
}
