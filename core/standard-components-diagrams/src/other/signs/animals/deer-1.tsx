import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEER_1 = {
  _style:
    'shape=mxgraph.signs.animals.deer_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 82,
  _height: 98,
}

export function Deer1(props: DiagramNodeProps) {
  return <Shape {...DEER_1} {...props} />
}
