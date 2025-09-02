import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HTTP_PROTOCOL = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.http_protocol;',
  },
  _original_width: 78,
  _original_height: 78,
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
