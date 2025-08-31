import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SSL_PADLOCK = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ssl_padlock;',
  _width: 78,
  _height: 76,
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
