import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RAIL_SHIPMENT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.rail_shipment;',
  _width: 100,
  _height: 30,
}

export function RailShipment(props: DiagramNodeProps) {
  return <Shape {...RAIL_SHIPMENT} {...props} />
}
