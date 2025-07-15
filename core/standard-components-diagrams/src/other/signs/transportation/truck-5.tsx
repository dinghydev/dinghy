import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRUCK_5 = {
  _style:
    'shape=mxgraph.signs.transportation.truck_5;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 27,
}

export function Truck5(props: DiagramNodeProps) {
  return <Shape {...TRUCK_5} {...props} />
}
