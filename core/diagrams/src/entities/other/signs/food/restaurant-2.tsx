import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESTAURANT_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.restaurant_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 52,
  _height: 104,
}

export function Restaurant2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RESTAURANT_2)} />
}
