import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WOMAN_2 = {
  _style:
    'shape=mxgraph.signs.people.woman_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 45,
  _height: 99,
}

export function Woman2(props: DiagramNodeProps) {
  return <Shape {...WOMAN_2} {...props} />
}
