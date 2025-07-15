import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOAT_SHIPMENT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.boat_shipment;align=center;',
  _width: 100,
  _height: 100,
}

export function BoatShipment(props: DiagramNodeProps) {
  return <Shape {...BOAT_SHIPMENT} {...props} />
}
