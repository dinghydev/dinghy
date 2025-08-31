import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOAD_BALANCING_ROUTING = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/load_balancing_routing.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function LoadBalancingRouting(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOAD_BALANCING_ROUTING}
      {...props}
      _style={extendStyle(LOAD_BALANCING_ROUTING, props)}
    />
  )
}
