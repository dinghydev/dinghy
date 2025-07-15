import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BABY_2 = {
  _style:
    'shape=mxgraph.signs.people.baby_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 77,
  _height: 99,
}

export function Baby2(props: DiagramNodeProps) {
  return <Shape {...BABY_2} {...props} />
}
