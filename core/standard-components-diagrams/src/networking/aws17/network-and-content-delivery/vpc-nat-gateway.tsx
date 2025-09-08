import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VPC_NAT_GATEWAY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vpc_nat_gateway;fillColor=#F58536;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function VpcNatGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...VPC_NAT_GATEWAY}
      {...props}
      _style={extendStyle(VPC_NAT_GATEWAY, props)}
    />
  )
}
