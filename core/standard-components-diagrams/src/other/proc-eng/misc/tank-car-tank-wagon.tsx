import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TANK_CAR_TANK_WAGON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.tank_car,_tank_wagon;',
  },
  _original_width: 127,
  _original_height: 80,
}

export function TankCarTankWagon(props: DiagramNodeProps) {
  return (
    <Shape
      {...TANK_CAR_TANK_WAGON}
      {...props}
      _style={extendStyle(TANK_CAR_TANK_WAGON, props)}
    />
  )
}
