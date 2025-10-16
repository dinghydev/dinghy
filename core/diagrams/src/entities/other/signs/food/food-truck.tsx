import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FOOD_TRUCK = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.food_truck;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 50,
}

export function FoodTruck(props: DiagramNodeProps) {
  return (
    <Shape {...FOOD_TRUCK} {...props} _style={extendStyle(FOOD_TRUCK, props)} />
  )
}
