import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHOPPING_BASKET = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Shopping_Cart_128x128.png',
  _width: 80,
  _height: 80,
}

export function ShoppingBasket(props: DiagramNodeProps) {
  return <Shape {...SHOPPING_BASKET} {...props} />
}
