import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AMBULANCE = {
  _style:
    'shape=mxgraph.signs.transportation.ambulance;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 68,
}

export function Ambulance(props: DiagramNodeProps) {
  return <Shape {...AMBULANCE} {...props} />
}
