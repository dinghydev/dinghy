import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOMER_GATEWAY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.customer_gateway;',
  },
  _width: 60,
  _height: 60,
}

export function CustomerGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOMER_GATEWAY}
      {...props}
      _style={extendStyle(CUSTOMER_GATEWAY, props)}
    />
  )
}
