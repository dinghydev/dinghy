import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AIRPLANE_4 = {
  _style:
    'shape=mxgraph.signs.transportation.airplane_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 91,
  _height: 98,
}

export function Airplane4(props: DiagramNodeProps) {
  return <Shape {...AIRPLANE_4} {...props} />
}
