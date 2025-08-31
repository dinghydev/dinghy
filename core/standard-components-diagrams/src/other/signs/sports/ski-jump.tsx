import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SKI_JUMP = {
  _style:
    'shape=mxgraph.signs.sports.ski_jump;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 93,
  _height: 98,
}

export function SkiJump(props: DiagramNodeProps) {
  return (
    <Shape {...SKI_JUMP} {...props} _style={extendStyle(SKI_JUMP, props)} />
  )
}
