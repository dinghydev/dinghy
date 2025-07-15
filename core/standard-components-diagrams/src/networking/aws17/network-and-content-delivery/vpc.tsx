import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VPC = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vpc;fillColor=#F58536;gradientColor=none;',
  _width: 67.5,
  _height: 81,
}

export function Vpc(props: DiagramNodeProps) {
  return <Shape {...VPC} {...props} />
}
