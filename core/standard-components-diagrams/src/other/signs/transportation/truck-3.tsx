import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRUCK_3 = {
  _style:
    'shape=mxgraph.signs.transportation.truck_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 44,
}

export function Truck3(props: DiagramNodeProps) {
  return <Shape {...TRUCK_3} {...props} />
}
