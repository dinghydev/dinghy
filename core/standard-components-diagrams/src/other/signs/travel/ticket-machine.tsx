import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TICKET_MACHINE = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.ticket_machine;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 88,
  _original_height: 100,
}

export function TicketMachine(props: DiagramNodeProps) {
  return (
    <Shape
      {...TICKET_MACHINE}
      {...props}
      _style={extendStyle(TICKET_MACHINE, props)}
    />
  )
}
