import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRUCK_SHIPMENT = {
  _style: {
    entity: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.truck_shipment;',
  },
  _width: 0,
  _height: 100,
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
