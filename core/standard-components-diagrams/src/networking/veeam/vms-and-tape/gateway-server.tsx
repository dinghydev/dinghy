import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GATEWAY_SERVER = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.gateway_server;',
  _width: 76,
  _height: 72,
}

export function GatewayServer(props: DiagramNodeProps) {
  return <Shape {...GATEWAY_SERVER} {...props} />
}
