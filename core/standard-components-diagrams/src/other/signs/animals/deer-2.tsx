import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEER_2 = {
  _style:
    'shape=mxgraph.signs.animals.deer_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 97,
  _height: 97,
}

export function Deer2(props: DiagramNodeProps) {
  return <Shape {...DEER_2} {...props} />
}
