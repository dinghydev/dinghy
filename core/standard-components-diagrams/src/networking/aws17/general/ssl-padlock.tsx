import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SSL_PADLOCK = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ssl_padlock;fillColor=#D2D3D3;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 78,
}

export function SslPadlock(props: DiagramNodeProps) {
  return (
    <Shape
      {...SSL_PADLOCK}
      {...props}
      _style={extendStyle(SSL_PADLOCK, props)}
    />
  )
}
