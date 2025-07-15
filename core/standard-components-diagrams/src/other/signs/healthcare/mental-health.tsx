import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MENTAL_HEALTH = {
  _style:
    'shape=mxgraph.signs.healthcare.mental_health;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 84,
  _height: 98,
}

export function MentalHealth(props: DiagramNodeProps) {
  return <Shape {...MENTAL_HEALTH} {...props} />
}
