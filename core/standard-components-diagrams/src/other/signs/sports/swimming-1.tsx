import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWIMMING_1 = {
  _style:
    'shape=mxgraph.signs.sports.swimming_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 72,
}

export function Swimming1(props: DiagramNodeProps) {
  return <Shape {...SWIMMING_1} {...props} />
}
