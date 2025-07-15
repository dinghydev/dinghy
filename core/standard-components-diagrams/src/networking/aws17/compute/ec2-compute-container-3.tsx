import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EC2_COMPUTE_CONTAINER_3 = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ec2_compute_container_3;fillColor=#F58534;gradientColor=none;',
  _width: 60,
  _height: 34.5,
}

export function Ec2ComputeContainer3(props: DiagramNodeProps) {
  return <Shape {...EC2_COMPUTE_CONTAINER_3} {...props} />
}
