import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BICYCLE_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bicycle_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 62,
}

export function Bicycle1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BICYCLE_1)} />
}
