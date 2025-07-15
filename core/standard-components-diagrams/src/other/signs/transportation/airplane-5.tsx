import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AIRPLANE_5 = {
  _style:
    'shape=mxgraph.signs.transportation.airplane_5;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 95,
  _height: 98,
}

export function Airplane5(props: DiagramNodeProps) {
  return <Shape {...AIRPLANE_5} {...props} />
}
