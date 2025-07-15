import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANCHOR_2 = {
  _style:
    'shape=mxgraph.signs.transportation.anchor_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 94,
  _height: 98,
}

export function Anchor2(props: DiagramNodeProps) {
  return <Shape {...ANCHOR_2} {...props} />
}
