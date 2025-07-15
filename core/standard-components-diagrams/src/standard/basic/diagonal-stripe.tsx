import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIAGONAL_STRIPE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.diag_stripe;dx=10;',
  _width: 100,
  _height: 60,
}

export function DiagonalStripe(props: DiagramNodeProps) {
  return <Shape {...DIAGONAL_STRIPE} {...props} />
}
