import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ECR = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ecr;fillColor=#F58534;gradientColor=none;',
  _width: 69,
  _height: 72,
}

export function Ecr(props: DiagramNodeProps) {
  return <Shape {...ECR} {...props} />
}
