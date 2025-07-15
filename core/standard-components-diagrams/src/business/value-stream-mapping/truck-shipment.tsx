import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRUCK_SHIPMENT = {
  _style: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.truck_shipment;',
  _width: 0,
  _height: 100,
}

export function TruckShipment(props: DiagramNodeProps) {
  return <Shape {...TRUCK_SHIPMENT} {...props} />
}
