import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANCHOR_4 = {
  _style:
    'shape=mxgraph.signs.transportation.anchor_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 98,
}

export function Anchor4(props: DiagramNodeProps) {
  return <Shape {...ANCHOR_4} {...props} />
}
