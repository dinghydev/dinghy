import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VPC_CUSTOMER_GATEWAY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.customer_gateway;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function VpcCustomerGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...VPC_CUSTOMER_GATEWAY}
      {...props}
      _style={extendStyle(VPC_CUSTOMER_GATEWAY, props)}
    />
  )
}
