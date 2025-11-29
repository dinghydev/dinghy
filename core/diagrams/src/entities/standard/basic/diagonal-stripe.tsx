import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIAGONAL_STRIPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.diag_stripe;dx=10;',
  },
  _width: 100,
  _height: 60,
}

export function DiagonalStripe(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DIAGONAL_STRIPE)} />
}
