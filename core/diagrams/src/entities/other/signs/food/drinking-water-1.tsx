import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DRINKING_WATER_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.drinking_water_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 84,
  _original_height: 98,
}

export function DrinkingWater1(props: DiagramNodeProps) {
  return (
    <Shape
      {...DRINKING_WATER_1}
      {...props}
      _style={extendStyle(DRINKING_WATER_1, props)}
    />
  )
}
