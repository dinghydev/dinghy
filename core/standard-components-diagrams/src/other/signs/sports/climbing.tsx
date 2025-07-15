import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLIMBING = {
  _style:
    'shape=mxgraph.signs.sports.climbing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 99,
}

export function Climbing(props: DiagramNodeProps) {
  return <Shape {...CLIMBING} {...props} />
}
