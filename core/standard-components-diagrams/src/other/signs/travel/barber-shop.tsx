import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BARBER_SHOP = {
  _style:
    'shape=mxgraph.signs.travel.barber_shop;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 93,
  _height: 100,
}

export function BarberShop(props: DiagramNodeProps) {
  return <Shape {...BARBER_SHOP} {...props} />
}
