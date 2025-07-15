import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AIRPLANE_2 = {
  _style:
    'shape=mxgraph.signs.transportation.airplane_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 102,
  _height: 57,
}

export function Airplane2(props: DiagramNodeProps) {
  return <Shape {...AIRPLANE_2} {...props} />
}
