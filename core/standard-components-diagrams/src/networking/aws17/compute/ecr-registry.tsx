import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ECR_REGISTRY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ecr_registry;fillColor=#F58534;gradientColor=none;',
  _width: 57,
  _height: 60,
}

export function EcrRegistry(props: DiagramNodeProps) {
  return <Shape {...ECR_REGISTRY} {...props} />
}
