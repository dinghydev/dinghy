import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JUMP_IN_ARROW_2 = {
  _style: {
    entity:
      'shape=mxgraph.arrows.jump-in_arrow_2;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 96,
  _original_height: 99,
}

export function JumpInArrow2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JUMP_IN_ARROW_2)} />
}
