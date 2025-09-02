import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const API_GATEWAY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.api_gateway;fillColor=#D9A741;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function ApiGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...API_GATEWAY}
      {...props}
      _style={extendStyle(API_GATEWAY, props)}
    />
  )
}
