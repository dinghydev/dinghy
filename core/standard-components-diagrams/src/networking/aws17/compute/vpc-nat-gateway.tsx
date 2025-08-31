import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPC_NAT_GATEWAY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vpc_nat_gateway;fillColor=#F58534;gradientColor=none;',
  },
  _width: 69,
  _height: 72,
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
