import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WOMAN_1 = {
  _style:
    'shape=mxgraph.signs.people.woman_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 48,
  _height: 100,
}

export function Woman1(props: DiagramNodeProps) {
  return <Shape {...WOMAN_1} {...props} />
}
