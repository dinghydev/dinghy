import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TANK_CAR_TANK_WAGON = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.tank_car,_tank_wagon;',
  _width: 127,
  _height: 80,
}

export function TankCarTankWagon(props: DiagramNodeProps) {
  return <Shape {...TANK_CAR_TANK_WAGON} {...props} />
}
