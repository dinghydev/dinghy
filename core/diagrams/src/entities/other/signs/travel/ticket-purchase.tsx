import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TICKET_PURCHASE = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.ticket_purchase;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 95,
}

export function TicketPurchase(props: NodeProps) {
  return (
    <Shape
      {...TICKET_PURCHASE}
      {...props}
      _style={extendStyle(TICKET_PURCHASE, props)}
    />
  )
}
