import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHOPPING_CART = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.shoppingCart;strokeColor=#999999;',
  },
  _width: 60,
  _height: 60,
}

export function ShoppingCart(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHOPPING_CART}
      {...props}
      _style={extendStyle(SHOPPING_CART, props)}
    />
  )
}
