import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOAD_BALANCING_ROUTING = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/load_balancing_routing.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function LoadBalancingRouting(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, LOAD_BALANCING_ROUTING)} />
  )
}
