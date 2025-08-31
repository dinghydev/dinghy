import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SSL_TLS_OFFLOADING = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.ssl_tls_offloading;',
  _width: 46.47,
  _height: 50,
}

export function SslTlsOffloading(props: DiagramNodeProps) {
  return (
    <Shape
      {...SSL_TLS_OFFLOADING}
      {...props}
      _style={extendStyle(SSL_TLS_OFFLOADING, props)}
    />
  )
}
