import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FISHING_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.fishing_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 117,
}

export function Fishing2(props: NodeProps) {
  return (
    <Shape {...FISHING_2} {...props} _style={extendStyle(FISHING_2, props)} />
  )
}
