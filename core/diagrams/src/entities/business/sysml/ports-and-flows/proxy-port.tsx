import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROXY_PORT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.port1;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 60,
}

export function ProxyPort(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROXY_PORT)} />
}
