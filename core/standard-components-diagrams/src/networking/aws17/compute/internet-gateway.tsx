import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERNET_GATEWAY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.internet_gateway;fillColor=#F58534;gradientColor=none;',
  _width: 69,
  _height: 72,
}

export function InternetGateway(props: DiagramNodeProps) {
  return <Shape {...INTERNET_GATEWAY} {...props} />
}
