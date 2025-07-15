import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VEHICLE_FERRY = {
  _style:
    'shape=mxgraph.signs.transportation.vehicle_ferry;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 66,
}

export function VehicleFerry(props: DiagramNodeProps) {
  return <Shape {...VEHICLE_FERRY} {...props} />
}
