import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAR_2 = {
  _style:
    'shape=mxgraph.signs.transportation.car_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 100,
  _height: 33,
}

export function Car2(props: DiagramNodeProps) {
  return <Shape {...CAR_2} {...props} />
}
