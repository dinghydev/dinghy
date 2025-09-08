import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HTTP_2_PROTOCOL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.http_2_protocol;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 66,
}

export function Http2Protocol(props: DiagramNodeProps) {
  return (
    <Shape
      {...HTTP_2_PROTOCOL}
      {...props}
      _style={extendStyle(HTTP_2_PROTOCOL, props)}
    />
  )
}
