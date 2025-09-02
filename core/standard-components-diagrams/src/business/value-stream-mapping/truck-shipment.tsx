import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUCK_SHIPMENT = {
  _style: {
    entity: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.truck_shipment;',
  },
  _original_width: 0,
  _original_height: 100,
}

export function TruckShipment(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRUCK_SHIPMENT}
      {...props}
      _style={extendStyle(TRUCK_SHIPMENT, props)}
    />
  )
}
