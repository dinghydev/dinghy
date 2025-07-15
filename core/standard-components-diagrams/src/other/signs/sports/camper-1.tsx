import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAMPER_1 = {
  _style:
    'shape=mxgraph.signs.sports.camper_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 79,
}

export function Camper1(props: DiagramNodeProps) {
  return <Shape {...CAMPER_1} {...props} />
}
