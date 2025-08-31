import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESTAURANT_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.restaurant_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 35,
  _height: 98,
}

export function Restaurant1(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESTAURANT_1}
      {...props}
      _style={extendStyle(RESTAURANT_1, props)}
    />
  )
}
