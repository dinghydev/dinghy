import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESTAURANT_2 = {
  _style:
    'shape=mxgraph.signs.food.restaurant_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 52,
  _height: 104,
}

export function Restaurant2(props: DiagramNodeProps) {
  return <Shape {...RESTAURANT_2} {...props} />
}
