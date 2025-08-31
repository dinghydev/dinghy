import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOAT_SHIPMENT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.boat_shipment;align=center;',
  _width: 60,
  _height: 60,
}

export function BoatShipment(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOAT_SHIPMENT}
      {...props}
      _style={extendStyle(BOAT_SHIPMENT, props)}
    />
  )
}
