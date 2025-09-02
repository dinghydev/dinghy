import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHOPPING_BASKET = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Shopping_Cart_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ShoppingBasket(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHOPPING_BASKET}
      {...props}
      _style={extendStyle(SHOPPING_BASKET, props)}
    />
  )
}
