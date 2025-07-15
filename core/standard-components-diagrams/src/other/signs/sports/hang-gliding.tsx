import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HANG_GLIDING = {
  _style:
    'shape=mxgraph.signs.sports.hang_gliding;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 66,
}

export function HangGliding(props: DiagramNodeProps) {
  return <Shape {...HANG_GLIDING} {...props} />
}
