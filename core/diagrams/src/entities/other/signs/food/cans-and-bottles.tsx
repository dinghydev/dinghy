import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CANS_AND_BOTTLES = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.cans_and_bottles;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 74,
  _height: 98,
}

export function CansAndBottles(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CANS_AND_BOTTLES)} />
}
