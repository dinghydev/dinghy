import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRUCK_SHIPMENT = {
  _style: {
    entity: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.truck_shipment;',
  },
  _width: 0,
  _height: 100,
}

export function TruckShipment(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRUCK_SHIPMENT)} />
}
