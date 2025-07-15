import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAR_1 = {
  _style:
    'shape=mxgraph.signs.transportation.car_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 88,
}

export function Car1(props: DiagramNodeProps) {
  return <Shape {...CAR_1} {...props} />
}
