import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NUTRITION = {
  _style:
    'shape=mxgraph.signs.healthcare.nutrition;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 99,
}

export function Nutrition(props: DiagramNodeProps) {
  return <Shape {...NUTRITION} {...props} />
}
