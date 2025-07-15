import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARKING_2 = {
  _style:
    'shape=mxgraph.signs.travel.parking_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 98,
}

export function Parking2(props: DiagramNodeProps) {
  return <Shape {...PARKING_2} {...props} />
}
