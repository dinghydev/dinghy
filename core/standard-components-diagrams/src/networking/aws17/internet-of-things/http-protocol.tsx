import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HTTP_PROTOCOL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.http_protocol;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 63,
  _height: 66,
}

export function HttpProtocol(props: DiagramNodeProps) {
  return (
    <Shape
      {...HTTP_PROTOCOL}
      {...props}
      _style={extendStyle(HTTP_PROTOCOL, props)}
    />
  )
}
