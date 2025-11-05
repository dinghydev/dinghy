import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOARDWALK = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.boardwalk;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 96,
  _original_height: 98,
}

export function Boardwalk(props: NodeProps) {
  return (
    <Shape {...BOARDWALK} {...props} _style={extendStyle(BOARDWALK, props)} />
  )
}
