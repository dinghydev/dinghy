import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BICYCLE_5 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bicycle_5;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 54,
}

export function Bicycle5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BICYCLE_5)} />
}
