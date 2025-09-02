import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OUTBOUND_CONNECTION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Outbound_Connection.svg;strokeColor=none;',
  },
  _original_width: 71,
  _original_height: 64,
}

export function OutboundConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...OUTBOUND_CONNECTION}
      {...props}
      _style={extendStyle(OUTBOUND_CONNECTION, props)}
    />
  )
}
