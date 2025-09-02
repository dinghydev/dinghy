import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BARBER_SHOP = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.barber_shop;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 93,
  _original_height: 100,
}

export function BarberShop(props: DiagramNodeProps) {
  return (
    <Shape
      {...BARBER_SHOP}
      {...props}
      _style={extendStyle(BARBER_SHOP, props)}
    />
  )
}
