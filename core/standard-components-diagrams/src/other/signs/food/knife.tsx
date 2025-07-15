import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KNIFE = {
  _style:
    'shape=mxgraph.signs.food.knife;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 97,
  _height: 11,
}

export function Knife(props: DiagramNodeProps) {
  return <Shape {...KNIFE} {...props} />
}
