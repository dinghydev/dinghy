import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANCHOR_1 = {
  _style:
    'shape=mxgraph.signs.transportation.anchor_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 92,
  _height: 98,
}

export function Anchor1(props: DiagramNodeProps) {
  return <Shape {...ANCHOR_1} {...props} />
}
