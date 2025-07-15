import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXCHANGE_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.exchange_server;',
  _width: 57,
  _height: 55,
}

export function ExchangeServer(props: DiagramNodeProps) {
  return <Shape {...EXCHANGE_SERVER} {...props} />
}
