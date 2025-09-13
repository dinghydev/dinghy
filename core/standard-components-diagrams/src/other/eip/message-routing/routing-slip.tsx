import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUTING_SLIP = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.routing_slip;',
  },
  _width: 150,
  _height: 90,
}

export function RoutingSlip(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUTING_SLIP}
      {...props}
      _style={extendStyle(ROUTING_SLIP, props)}
    />
  )
}
