import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HTTP2_PROTOCOL = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.http2_protocol;',
  _width: 60,
  _height: 60,
}

export function Http2Protocol(props: DiagramNodeProps) {
  return (
    <Shape
      {...HTTP2_PROTOCOL}
      {...props}
      _style={extendStyle(HTTP2_PROTOCOL, props)}
    />
  )
}
