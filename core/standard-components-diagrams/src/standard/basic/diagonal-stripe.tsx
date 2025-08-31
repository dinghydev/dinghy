import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAGONAL_STRIPE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.diag_stripe;dx=10;',
  _width: 100,
  _height: 60,
}

export function DiagonalStripe(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAGONAL_STRIPE}
      {...props}
      _style={extendStyle(DIAGONAL_STRIPE, props)}
    />
  )
}
