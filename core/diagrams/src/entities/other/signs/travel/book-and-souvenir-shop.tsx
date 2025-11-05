import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOOK_AND_SOUVENIR_SHOP = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.book_and_souvenir_shop;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 92,
}

export function BookAndSouvenirShop(props: NodeProps) {
  return (
    <Shape
      {...BOOK_AND_SOUVENIR_SHOP}
      {...props}
      _style={extendStyle(BOOK_AND_SOUVENIR_SHOP, props)}
    />
  )
}
