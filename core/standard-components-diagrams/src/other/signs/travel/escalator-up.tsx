import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ESCALATOR_UP = {
  _style:
    'shape=mxgraph.signs.travel.escalator_up;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 90,
}

export function EscalatorUp(props: DiagramNodeProps) {
  return <Shape {...ESCALATOR_UP} {...props} />
}
