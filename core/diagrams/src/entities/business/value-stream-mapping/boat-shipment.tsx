import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOAT_SHIPMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.boat_shipment;align=center;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function BoatShipment(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BOAT_SHIPMENT)} />
}
