import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TDD = {
  _style:
    'shape=mxgraph.signs.healthcare.tdd;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 84,
  _height: 98,
}

export function Tdd(props: DiagramNodeProps) {
  return <Shape {...TDD} {...props} />
}
