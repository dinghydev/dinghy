import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUSTOMER_GATEWAY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.customer_gateway;fillColor=#F58536;gradientColor=none;',
  _width: 69,
  _height: 72,
}

export function CustomerGateway(props: DiagramNodeProps) {
  return <Shape {...CUSTOMER_GATEWAY} {...props} />
}
