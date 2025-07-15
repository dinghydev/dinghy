import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SSL_PADLOCK = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ssl_padlock;fillColor=#D2D3D3;gradientColor=none;',
  _width: 63,
  _height: 78,
}

export function SslPadlock(props: DiagramNodeProps) {
  return <Shape {...SSL_PADLOCK} {...props} />
}
