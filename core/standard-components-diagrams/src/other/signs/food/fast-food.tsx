import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAST_FOOD = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.fast_food;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 87,
}

export function FastFood(props: DiagramNodeProps) {
  return (
    <Shape {...FAST_FOOD} {...props} _style={extendStyle(FAST_FOOD, props)} />
  )
}
