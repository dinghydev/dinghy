import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TICKET_MACHINE = {
  _style:
    'shape=mxgraph.signs.travel.ticket_machine;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 88,
  _height: 100,
}

export function TicketMachine(props: DiagramNodeProps) {
  return <Shape {...TICKET_MACHINE} {...props} />
}
