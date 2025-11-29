import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VEHICLE_FERRY = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.vehicle_ferry;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 66,
}

export function VehicleFerry(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VEHICLE_FERRY)} />
}
