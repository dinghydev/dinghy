import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FAST_FOOD = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.fast_food;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 87,
}

export function FastFood(props: NodeProps) {
  return (
    <Shape {...FAST_FOOD} {...props} _style={extendStyle(FAST_FOOD, props)} />
  )
}
