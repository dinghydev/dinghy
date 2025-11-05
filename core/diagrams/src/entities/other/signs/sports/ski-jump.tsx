import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SKI_JUMP = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.ski_jump;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 93,
  _original_height: 98,
}

export function SkiJump(props: NodeProps) {
  return (
    <Shape {...SKI_JUMP} {...props} _style={extendStyle(SKI_JUMP, props)} />
  )
}
