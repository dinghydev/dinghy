import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JUMP_IN_ARROW_2 = {
  _style: {
    entity:
      'shape=mxgraph.arrows.jump-in_arrow_2;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 96,
  _original_height: 99,
}

export function JumpInArrow2(props: DiagramNodeProps) {
  return (
    <Shape
      {...JUMP_IN_ARROW_2}
      {...props}
      _style={extendStyle(JUMP_IN_ARROW_2, props)}
    />
  )
}
