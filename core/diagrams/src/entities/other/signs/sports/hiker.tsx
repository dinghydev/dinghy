import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HIKER = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.hiker;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 63,
  _height: 98,
}

export function Hiker(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HIKER)} />
}
