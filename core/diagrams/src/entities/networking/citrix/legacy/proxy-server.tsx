import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROXY_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.proxy_server;',
  },
  _original_width: 76.5,
  _original_height: 90,
}

export function ProxyServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROXY_SERVER)} />
}
