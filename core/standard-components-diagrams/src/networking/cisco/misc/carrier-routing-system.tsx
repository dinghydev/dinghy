import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARRIER_ROUTING_SYSTEM = {
  _style:
    'shape=mxgraph.cisco.misc.carrier_routing_system;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 60,
  _height: 60,
}

export function CarrierRoutingSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...CARRIER_ROUTING_SYSTEM}
      {...props}
      _style={extendStyle(CARRIER_ROUTING_SYSTEM, props)}
    />
  )
}
