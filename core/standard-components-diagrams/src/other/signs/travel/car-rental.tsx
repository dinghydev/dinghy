import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAR_RENTAL = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.car_rental;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 75,
  _height: 101,
}

export function CarRental(props: DiagramNodeProps) {
  return (
    <Shape {...CAR_RENTAL} {...props} _style={extendStyle(CAR_RENTAL, props)} />
  )
}
