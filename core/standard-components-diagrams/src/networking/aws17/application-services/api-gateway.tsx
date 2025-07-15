import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const API_GATEWAY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.api_gateway;fillColor=#D9A741;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function ApiGateway(props: DiagramNodeProps) {
  return <Shape {...API_GATEWAY} {...props} />
}
