import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const API_GATEWAY_ENDPOINT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.endpoint;',
  },
  _width: 60,
  _height: 60,
}

export function ApiGatewayEndpoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...API_GATEWAY_ENDPOINT}
      {...props}
      _style={extendStyle(API_GATEWAY_ENDPOINT, props)}
    />
  )
}
