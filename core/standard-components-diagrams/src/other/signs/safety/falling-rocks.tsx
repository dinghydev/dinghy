import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FALLING_ROCKS = {
  _style:
    'shape=mxgraph.signs.safety.falling_rocks;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 99,
}

export function FallingRocks(props: DiagramNodeProps) {
  return <Shape {...FALLING_ROCKS} {...props} />
}
