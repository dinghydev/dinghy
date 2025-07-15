import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOOD_TRUCK = {
  _style:
    'shape=mxgraph.signs.food.food_truck;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 50,
}

export function FoodTruck(props: DiagramNodeProps) {
  return <Shape {...FOOD_TRUCK} {...props} />
}
