import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ECR_REGISTRY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ecr_registry;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 57,
  _original_height: 60,
}

export function EcrRegistry(props: DiagramNodeProps) {
  return (
    <Shape
      {...ECR_REGISTRY}
      {...props}
      _style={extendStyle(ECR_REGISTRY, props)}
    />
  )
}
