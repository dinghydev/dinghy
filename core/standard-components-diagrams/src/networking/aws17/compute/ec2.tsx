import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EC2 = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ec2;fillColor=#F58534;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function Ec2(props: DiagramNodeProps) {
  return <Shape {...EC2} {...props} />
}
