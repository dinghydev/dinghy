import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JEEP_2 = {
  _style:
    'shape=mxgraph.signs.transportation.jeep_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 48,
}

export function Jeep2(props: DiagramNodeProps) {
  return <Shape {...JEEP_2} {...props} />
}
