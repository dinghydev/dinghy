import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TICKET_PURCHASE = {
  _style:
    'shape=mxgraph.signs.travel.ticket_purchase;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 95,
}

export function TicketPurchase(props: DiagramNodeProps) {
  return (
    <Shape
      {...TICKET_PURCHASE}
      {...props}
      _style={extendStyle(TICKET_PURCHASE, props)}
    />
  )
}
