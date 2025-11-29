import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHIP_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.ship_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 52,
}

export function Ship1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHIP_1)} />
}
