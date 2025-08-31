import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JUMP_IN_ARROW_1 = {
  _style: {
    entity:
      'shape=mxgraph.arrows.jump-in_arrow_1;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 96,
  _height: 99,
}

export function JumpInArrow1(props: DiagramNodeProps) {
  return (
    <Shape
      {...JUMP_IN_ARROW_1}
      {...props}
      _style={extendStyle(JUMP_IN_ARROW_1, props)}
    />
  )
}
