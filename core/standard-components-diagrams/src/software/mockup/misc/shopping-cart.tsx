import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHOPPING_CART = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.shoppingCart;strokeColor=#999999;',
  _width: 50,
  _height: 50,
}

export function ShoppingCart(props: DiagramNodeProps) {
  return <Shape {...SHOPPING_CART} {...props} />
}
