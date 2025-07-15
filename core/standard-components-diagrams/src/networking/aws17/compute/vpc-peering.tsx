import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VPC_PEERING = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vpc_peering;fillColor=#F58534;gradientColor=none;',
  _width: 69,
  _height: 72,
}

export function VpcPeering(props: DiagramNodeProps) {
  return <Shape {...VPC_PEERING} {...props} />
}
