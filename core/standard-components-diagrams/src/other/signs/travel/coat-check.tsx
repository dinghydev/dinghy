import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COAT_CHECK = {
  _style:
    'shape=mxgraph.signs.travel.coat_check;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 100,
  _height: 71,
}

export function CoatCheck(props: DiagramNodeProps) {
  return <Shape {...COAT_CHECK} {...props} />
}
