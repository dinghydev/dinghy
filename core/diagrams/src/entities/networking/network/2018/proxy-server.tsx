import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROXY_SERVER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.proxy_server;',
  },
  _original_width: 105,
  _original_height: 105,
}

export function ProxyServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROXY_SERVER}
      {...props}
      _style={extendStyle(PROXY_SERVER, props)}
    />
  )
}
