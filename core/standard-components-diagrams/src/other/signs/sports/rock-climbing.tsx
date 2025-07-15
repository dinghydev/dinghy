import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROCK_CLIMBING = {
  _style:
    'shape=mxgraph.signs.sports.rock_climbing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 76,
  _height: 98,
}

export function RockClimbing(props: DiagramNodeProps) {
  return <Shape {...ROCK_CLIMBING} {...props} />
}
