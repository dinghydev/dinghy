import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPC_PEERING = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vpc_peering;fillColor=#F58536;gradientColor=none;',
  },
  _width: 69,
  _height: 72,
}

export function VpcPeering(props: DiagramNodeProps) {
  return (
    <Shape
      {...VPC_PEERING}
      {...props}
      _style={extendStyle(VPC_PEERING, props)}
    />
  )
}
