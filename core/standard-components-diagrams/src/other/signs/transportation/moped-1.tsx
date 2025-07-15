import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOPED_1 = {
  _style:
    'shape=mxgraph.signs.transportation.moped_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 57,
}

export function Moped1(props: DiagramNodeProps) {
  return <Shape {...MOPED_1} {...props} />
}
