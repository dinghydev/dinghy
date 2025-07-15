import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_TICKET_INTELLIGENCE = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Service_Ticket_Intelligence2',
  _width: 50,
  _height: 50,
}

export function ServiceTicketIntelligence(props: DiagramNodeProps) {
  return <Shape {...SERVICE_TICKET_INTELLIGENCE} {...props} />
}
