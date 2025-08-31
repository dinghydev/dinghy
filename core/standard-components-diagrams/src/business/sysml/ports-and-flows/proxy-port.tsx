import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROXY_PORT = {
  _style:
    'html=1;shape=mxgraph.sysml.port1;fontStyle=1;whiteSpace=wrap;align=center;',
  _width: 0,
  _height: 60,
}

export function ProxyPort(props: DiagramNodeProps) {
  return (
    <Shape {...PROXY_PORT} {...props} _style={extendStyle(PROXY_PORT, props)} />
  )
}
