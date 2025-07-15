import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWING = {
  _style:
    'shape=mxgraph.signs.sports.swing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 100,
}

export function Swing(props: DiagramNodeProps) {
  return <Shape {...SWING} {...props} />
}
