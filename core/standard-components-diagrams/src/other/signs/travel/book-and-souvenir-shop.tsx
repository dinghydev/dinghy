import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOOK_AND_SOUVENIR_SHOP = {
  _style:
    'shape=mxgraph.signs.travel.book_and_souvenir_shop;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 92,
}

export function BookAndSouvenirShop(props: DiagramNodeProps) {
  return <Shape {...BOOK_AND_SOUVENIR_SHOP} {...props} />
}
