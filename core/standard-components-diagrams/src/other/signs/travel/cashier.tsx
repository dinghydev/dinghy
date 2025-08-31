import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CASHIER = {
  _style:
    'shape=mxgraph.signs.travel.cashier;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Cashier(props: DiagramNodeProps) {
  return <Shape {...CASHIER} {...props} _style={extendStyle(CASHIER, props)} />
}
