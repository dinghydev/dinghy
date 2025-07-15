import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAMPER_2 = {
  _style:
    'shape=mxgraph.signs.sports.camper_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 59,
}

export function Camper2(props: DiagramNodeProps) {
  return <Shape {...CAMPER_2} {...props} />
}
