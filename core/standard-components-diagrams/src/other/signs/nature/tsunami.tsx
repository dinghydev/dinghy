import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TSUNAMI = {
  _style:
    'shape=mxgraph.signs.nature.tsunami;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 88,
}

export function Tsunami(props: DiagramNodeProps) {
  return <Shape {...TSUNAMI} {...props} />
}
