import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NUCLEAR_1 = {
  _style:
    'shape=mxgraph.signs.science.nuclear_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 88,
}

export function Nuclear1(props: DiagramNodeProps) {
  return <Shape {...NUCLEAR_1} {...props} />
}
