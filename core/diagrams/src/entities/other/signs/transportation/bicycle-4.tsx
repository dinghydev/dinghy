import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BICYCLE_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bicycle_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 58,
}

export function Bicycle4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BICYCLE_4)} />
}
