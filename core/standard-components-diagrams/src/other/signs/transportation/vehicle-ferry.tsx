import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VEHICLE_FERRY = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.vehicle_ferry;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 66,
}

export function VehicleFerry(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEHICLE_FERRY}
      {...props}
      _style={extendStyle(VEHICLE_FERRY, props)}
    />
  )
}
