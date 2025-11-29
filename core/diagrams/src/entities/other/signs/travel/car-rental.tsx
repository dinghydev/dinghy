import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAR_RENTAL = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.car_rental;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 75,
  _height: 101,
}

export function CarRental(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CAR_RENTAL)} />
}
