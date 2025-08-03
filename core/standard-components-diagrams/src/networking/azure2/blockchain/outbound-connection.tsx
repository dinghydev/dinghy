import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OUTBOUND_CONNECTION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Outbound_Connection.svg;strokeColor=none;',
  _width: 71,
  _height: 64,
}

export function OutboundConnection(props: DiagramNodeProps) {
  return <Shape {...OUTBOUND_CONNECTION} {...props} />
}
