import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRINKING_WATER_2 = {
  _style:
    'shape=mxgraph.signs.food.drinking_water_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 76,
  _height: 98,
}

export function DrinkingWater2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DRINKING_WATER_2}
      {...props}
      _style={extendStyle(DRINKING_WATER_2, props)}
    />
  )
}
