import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXCHANGE_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.exchange_server;',
  },
  _original_width: 57,
  _original_height: 55,
}

export function ExchangeServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCHANGE_SERVER}
      {...props}
      _style={extendStyle(EXCHANGE_SERVER, props)}
    />
  )
}
