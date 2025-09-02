import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOOD_TRUCK = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.food_truck;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 50,
}

export function FoodTruck(props: DiagramNodeProps) {
  return (
    <Shape {...FOOD_TRUCK} {...props} _style={extendStyle(FOOD_TRUCK, props)} />
  )
}
