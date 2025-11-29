import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COFFEE = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.coffee;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 61,
}

export function Coffee(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COFFEE)} />
}
