import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BARBER_SHOP = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.barber_shop;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 93,
  _original_height: 100,
}

export function BarberShop(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BARBER_SHOP)} />
}
