import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAXI = {
  _style:
    'shape=mxgraph.signs.transportation.taxi;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 94,
}

export function Taxi(props: DiagramNodeProps) {
  return <Shape {...TAXI} {...props} />
}
