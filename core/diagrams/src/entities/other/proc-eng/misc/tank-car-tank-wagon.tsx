import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TANK_CAR_TANK_WAGON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.tank_car,_tank_wagon;',
  },
  _width: 127,
  _height: 80,
}

export function TankCarTankWagon(props: NodeProps) {
  return (
    <Shape
      {...TANK_CAR_TANK_WAGON}
      {...props}
      _style={extendStyle(TANK_CAR_TANK_WAGON, props)}
    />
  )
}
