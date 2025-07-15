import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROXY_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.proxy_server;',
  _width: 76.5,
  _height: 90,
}

export function ProxyServer(props: DiagramNodeProps) {
  return <Shape {...PROXY_SERVER} {...props} />
}
