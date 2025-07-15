import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARKING_1 = {
  _style:
    'shape=mxgraph.signs.travel.parking_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 74,
  _height: 98,
}

export function Parking1(props: DiagramNodeProps) {
  return <Shape {...PARKING_1} {...props} />
}
