import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUND_TRANSPORTATION = {
  _style:
    'shape=mxgraph.signs.transportation.ground_transportation;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 62,
}

export function GroundTransportation(props: DiagramNodeProps) {
  return <Shape {...GROUND_TRANSPORTATION} {...props} />
}
