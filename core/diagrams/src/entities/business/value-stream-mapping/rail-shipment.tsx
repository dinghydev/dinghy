import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RAIL_SHIPMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.rail_shipment;',
  },
  _width: 100,
  _height: 30,
}

export function RailShipment(props: DiagramNodeProps) {
  return (
    <Shape
      {...RAIL_SHIPMENT}
      {...props}
      _style={extendStyle(RAIL_SHIPMENT, props)}
    />
  )
}
