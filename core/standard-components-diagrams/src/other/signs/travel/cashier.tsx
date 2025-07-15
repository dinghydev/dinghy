import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CASHIER = {
  _style:
    'shape=mxgraph.signs.travel.cashier;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 99,
}

export function Cashier(props: DiagramNodeProps) {
  return <Shape {...CASHIER} {...props} />
}
